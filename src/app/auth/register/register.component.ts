import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ]
})
export class RegisterComponent {
  public formSubmitted = false;




  public registerForm = this.fb.group({
    nombre:['Fernando',[Validators.required, Validators.minLength(3)]],
    email:['test1@gmail.com',[Validators.required,Validators.email]],
    password:['12345',[Validators.required]],
    password2:['12345',[Validators.required]],
    terminos:[ true,Validators.required]
  },{
    validators: this.passwordsIguales('password', 'password2')
  });


  constructor(private fb:FormBuilder,
              private usuarioService:UsuarioService,
              private router : Router) { }



  crearUsuario(){
    this.formSubmitted = true;
    console.log(this.registerForm.controls);

    if(this.registerForm.invalid){
      return;
    }
    //Realizar posteo
    this.usuarioService.crearUsuario(this.registerForm.value)
                       .subscribe(resp =>{
this.router.navigateByUrl('/');

                       },(err) => {
                        //si sucedde un error
                        Swal.fire('Error',err.error.msg,'error');
                       });
  }

  campoNoValido(campo : string):boolean {


  if(this.registerForm.get(campo).invalid && this.formSubmitted){
    return true;
  }
    return false;
  }

  aceptaTerminos(){
    return !this.registerForm.get('terminos').value && this.formSubmitted;
  }

  contrasenasNoValidas(){
    const  pass1 = this.registerForm.get('password').value;
    const  pass2 = this.registerForm.get('password2').value;

    if((pass1 !==pass2) && this.formSubmitted){
      return true;
    }else{
      return false;
    }
  }
  passwordsIguales(pass1:string, pass2:string){
    return (formgroup:FormGroup) =>{
      const pass1control = formgroup.get(pass1);
      const pass1contro2 = formgroup.get(pass2);


      if(pass1control.value === pass1contro2.value){
        pass1contro2.setErrors(null);
      }else{
        pass1contro2.setErrors({noEsigual:true});
      }
    }

  }

}
