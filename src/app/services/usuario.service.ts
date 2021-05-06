import { HttpClient} from '@angular/common/http';
import { Injectable ,NgZone} from '@angular/core';
import { loginForm } from '../interfaces/login-form.interface';
import { registerForm } from '../interfaces/register-form.interface';


import { tap, map, catchError, delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.model';
import { cargarUsuario } from '../interfaces/cargar-usuarios.interface';

declare const gapi: any;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  public auth2: any;

  public usuario: Usuario;
 
  base_url = environment.base_url;



constructor( private http: HttpClient, 
    private router: Router,
    private ngZone: NgZone ) {

    this.googleInit();
}
get token():string{
  return localStorage.getItem('token') || '';

}
get uid ():string{
return this.usuario.uid || '';
}
get headers(){
  return {
    headers:{
      'x-token': this.token
    }
  }
}

googleInit() {

  return new Promise<void>( (resolve) => {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '979987995319-05inlu3eavvs1ehmch2fec064iap4ufc.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });

      resolve();
    });
  });

}


logout() {
  localStorage.removeItem('token');

  this.auth2.signOut().then(() => {

    this.ngZone.run(() => {
      this.router.navigateByUrl('/login');
    })
  });

}
validarToken(): Observable<boolean> {
  

  return this.http.get(`${ this.base_url }/login/renew`, {
    headers: {
      'x-token': this.token
    }
  }).pipe(
    map( (resp: any) => {
      
      const {email, google, nombre, role, img = '', uid} = resp.usuario;
      this.usuario = new Usuario(nombre, email,'',img,google,role,uid);
      this.usuario.imprimirTodo();
      localStorage.setItem('token', resp.token );
      return true;
    }),

    catchError( error => of(false) )
  );

}


  crearUsuario (formData:registerForm){
    return this.http.post(`${this.base_url}/usuarios`, formData) 
                      .pipe(
                       tap((resp:any) =>{
                          localStorage.setItem('token', resp.token)
                       })
                      );
  }

  actualizarPerfil(data:{email:string,nombre:string, role:string }){

    data= {
      ...data,
      role:this.usuario.role
    }


    return this.http.put(`${this.base_url}/usuarios/${this.uid}`,data,this.headers);

  }

  
  loginForm (formData:loginForm){

    return this.http.post(`${this.base_url}/login`, formData)
                     .pipe(
                       tap((resp:any) =>{
                          localStorage.setItem('token', resp.token)
                       })
                     );

  }

  loginGoogle( token ) {
    
    return this.http.post(`${ this.base_url }/login/google`, { token } )
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.token )
                  })
                );

  }

  cargarUsuarios (desde:number = 0){
    
    const url = `${this.base_url}/usuarios?desde=${desde}`;
    return this.http.get<cargarUsuario>(url,this.headers)
               .pipe(
                 
                 map(resp =>{
                   const usuarios =resp.usuarios.map( user => new Usuario(user.nombre,user.email,'',user.img,user.google,user.role,user.uid));
                    return {
                      total: resp.total,
                      usuarios
                    }
                 })
               )

  }

  eliminarUsuario( usuario: Usuario ) {
    
    // /usuarios/5eff3c5054f5efec174e9c84
    const url = `${ this.base_url }/usuarios/${ usuario.uid }`;
    return this.http.delete( url, this.headers );
}

guardarUsuario(usuario:Usuario){


  return this.http.put(`${this.base_url}/usuarios/${usuario.uid}`,usuario,this.headers);

}

}
