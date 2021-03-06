import { Component, OnDestroy} from '@angular/core';
import { Observable,interval, Subscription } from 'rxjs';
import {retry,take,map,filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs:Subscription;

  constructor() {
   
  //   this.retornaObservable().pipe(
  //    retry(1)
  //  ).subscribe( 
  //    valor => console.log('Subs',valor),
  //    (err)=> console.warn('Err', err),
  //    ()=> console.info('OBS terminado'),

  //  );

  this.intervalSubs = this.retornaIntervalo().subscribe(
    (valor) => console.log(valor)
  )
  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


  retornaIntervalo(){
    const interval$ = interval(1000)
                      .pipe(
                        map(valor => valor+1),
                        filter(valor=>(valor%2 ===0) ?  true : false),
                        take(4),
                        
                      )

    return interval$;
  }

  retornaObservable():Observable<number>{
    let i = -1  ;
   return new Observable<number>(observer =>{

   
     const interval = setInterval(()=>{
        i++;

        observer.next(i);

        if(i===4){
            clearInterval(interval);
            observer.complete();
        }

        if(i===2){
          observer.error('i llego al valor de 2');
        }

     },1000)
   });

  

  }


}
