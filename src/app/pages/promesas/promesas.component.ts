import { Component, OnInit } from '@angular/core';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then(usuarios => console.log(usuarios));
    // this.getUsuarios();

    // const promesa = new Promise((resolve,reject ) =>{

    //   if(true){

    //     resolve('Hola mundo');
    //   }else{
    //     reject('Algo salio mal');
    //   }

    // });

    // promesa.then((mensaje)=>{
    //   console.log(mensaje);
    // })
    // .catch(error => console.log('Error en la promesa',error));
      
    // console.log('fin del init');
  }

  getUsuarios (){
    return  new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
      .then( resp =>resp.json() )
      .then(body => resolve(body.data));

    });


      // console.log('Tengo data');
      // console.log(resp);
      // resp.json().then(body =>{
      //   console.log(body);
      // });
  }
}
