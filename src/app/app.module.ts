import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppBarModule} from "./common/app-bar/app-bar.module";
import {LoginModule} from "./views/login/login.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBarModule,
    LoginModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }