import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    LoginRoutingModule,
  ],
  providers: [],
  exports: [
    LoginComponent
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
