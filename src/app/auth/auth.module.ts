import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [LoginComponent,RegisterComponent,NopagefoundComponent],
  exports:[LoginComponent,RegisterComponent,NopagefoundComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
