import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DadshboardComponent } from './dadshboard/dadshboard.component';
import { RoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import{ChartsModule} from 'ng2-charts';



@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DadshboardComponent
  ],
  exports:[
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DadshboardComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    ComponentsModule
    
    
  ]
})
export class PagesModule { }
