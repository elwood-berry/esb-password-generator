/*
PASSWORD GENERATOR.
*/

// ANGULAR
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// APP.
import { AppComponent } from './app.component';

// NG.
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

// APP.
export class AppModule {}
