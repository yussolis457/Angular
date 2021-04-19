import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { DadshboardComponent } from './pages/dadshboard/dadshboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    {
        path:'',
        component:PagesComponent,
        children:[
            { path: 'dashboard', component: DadshboardComponent },
            { path: 'grafica1', component: Grafica1Component },
            { path: 'progess', component: ProgressComponent },
            { path: '', redirectTo: 'dashboard',pathMatch:'full' },
        ]

    },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    
    { path: '**', component: NopagefoundComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {}
