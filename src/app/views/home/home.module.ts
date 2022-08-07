import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import {AppBarModule} from "../../common/app-bar/app-bar.module";
import {LoginModule} from "../login/login.module";
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppBarModule,
    LoginModule,

  ],
  providers: [],
  exports: [
    HomeComponent
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
