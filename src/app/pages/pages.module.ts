import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DadshboardComponent } from './dadshboard/dadshboard.component';
import { RoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import{ChartsModule} from 'ng2-charts';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DadshboardComponent,
    AccountSettingComponent,
    PromesasComponent,
    RxjsComponent,
    PerfilComponent
  ],
  exports:[
    PagesComponent,
    ProgressComponent,
    Grafica1Component,
    DadshboardComponent,
    AccountSettingComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    ComponentsModule,
    ReactiveFormsModule
    
    
  ]
})
export class PagesModule { }
