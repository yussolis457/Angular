import { HttpClient} from '@angular/common/http';
import { Injectable ,NgZone} from '@angular/core';
import { loginForm } from '../interfaces/login-form.interface';
import { registerForm } from '../interfaces/register-form.interface';


import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

declare const gapi: any;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  public auth2: any;
 
  base_url = environment.base_url;



    constructor( private http: HttpClient, 
    private router: Router,
    private ngZone: NgZone ) {

    this.googleInit();
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
  const token = localStorage.getItem('token') || '';

  return this.http.get(`${ this.base_url }/login/renew`, {
    headers: {
      'x-token': token
    }
  }).pipe(
    tap( (resp: any) => {
      localStorage.setItem('token', resp.token );
    }),
    map( resp => true),
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

}
