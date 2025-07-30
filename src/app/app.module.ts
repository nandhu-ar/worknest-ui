import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppComponent, // Import standalone AppComponent
    NavbarComponent // Import standalone NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }