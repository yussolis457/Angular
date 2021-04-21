import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DadshboardComponent } from './dadshboard/dadshboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [
    {
        path:'dashboard',
        component:PagesComponent,
        children:[
            { path: '', component: DadshboardComponent },
            { path: 'grafica1', component: Grafica1Component},
            { path: 'progress', component: ProgressComponent },
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
