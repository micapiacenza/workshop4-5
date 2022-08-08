import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  exports: [
    LoginComponent
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
