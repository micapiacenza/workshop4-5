import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppBarComponent } from './app-bar.component';

@NgModule({
  declarations: [
    AppBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    AppBarComponent
  ],
  bootstrap: [AppBarComponent]
})
export class AppBarModule { }
