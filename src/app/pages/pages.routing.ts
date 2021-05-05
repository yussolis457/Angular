import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DadshboardComponent } from './dadshboard/dadshboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from '../guards/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
    {
        path:'dashboard',
        component:PagesComponent,
        canActivate:[AuthGuard],
        children:[
            { path: '', component: DadshboardComponent, data:{titulo:'Dashboard'} },
            { path: 'grafica1', component: Grafica1Component,data:{titulo:'Grafica'}},
            { path: 'progress', component: ProgressComponent, data:{titulo:'Progress'}},
            { path: 'account-settings', component:AccountSettingComponent,data:{titulo:'Acoount_settings'}},
            { path: 'promesas', component:PromesasComponent,data:{titulo:'promesas'}},
            { path:'rxjs', component:RxjsComponent,data:{titulo:'RXJS'}},
            { path:'perfil', component:PerfilComponent,data:{titulo:'Perfil'}}    
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
