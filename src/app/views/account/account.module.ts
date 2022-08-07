import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AccountRoutingModule
  ],
  providers: [],
  bootstrap: [AccountComponent]
})
export class AccountModule { }
