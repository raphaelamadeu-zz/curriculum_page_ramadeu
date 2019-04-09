import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeadspaceComponent } from './leadspace/leadspace.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeadspaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
