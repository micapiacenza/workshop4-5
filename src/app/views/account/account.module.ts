import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AccountComponent]
})
export class AccountModule { }
