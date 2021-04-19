import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { NopagefoundComponent } from './auth/nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [

    {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    { path: '**', component: NopagefoundComponent },

];

@NgModule({
    declarations:[],
    imports: [RouterModule.forRoot(routes),
              PagesRoutingModule,
              AuthRoutingModule],
    exports: [RouterModule]
})
export class RoutingModule {}
