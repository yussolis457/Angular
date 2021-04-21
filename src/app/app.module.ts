import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import  {RoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    PagesModule,
    AuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
