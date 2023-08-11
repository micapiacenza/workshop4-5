import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppBarModule} from "./common/app-bar/app-bar.module";
import {LoginModule} from "./views/login/login.module";
import {HomeModule} from "./views/home/home.module";
import { AccountModule } from './views/account/account.module';
import { UserService } from './common/services/user.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppBarModule,
    LoginModule,
    AccountModule,
    HomeModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
