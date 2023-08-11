import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppBarComponent } from './app-bar.component';
import {RouterModule} from "@angular/router";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  exports: [
    AppBarComponent
  ],
  bootstrap: [AppBarComponent]
})
export class AppBarModule { }
