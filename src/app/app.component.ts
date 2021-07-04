/*
PASSWORD GENERATOR.
See https://github.com/elwood-berry/esb-password-generator
Author: Elwood Berry for ELWOODBERRY.COM
Email: me@elwoodberry.com 
*/

import { Component, VERSION } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'password-generator',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // VARIABLES
  public password: string = ''; // A single property of this class.
  public includeNumbers: boolean = false; // Do you want to include numbers in the generated password?
  public includeSymbols: boolean = false; // Do you want to include symbols in the generated password?
  public includeLetters: boolean = false; // Do you want to include letters in the generated password?

  constructor() {}

  public onButtonClick() {
    console.log('Button Was Clicked');

    this.password = 'DISPLAY THE PASSWORD'; // Update the password string.
  }

  // ALTERNATIVE: Calling A Method.
  public getPassword() {
    console.log('Alternative method for getting password has been clicked.');
    return this.password;
  }

  /*
CHANGE EVENTS 
Methods called from checkboxes.
*/

  // METHOD: USE NUMBERS?
  // The user is determining whether or not they want to include numbers in the password generated.
  public useNumbers() {
    this.includeNumbers = !this.includeNumbers; // The opposite of whatever I am.
  }

  // METHOD: USE SYMBOLS
  // The user is determining whether or not they want to include symbols in the password generated.
  public useSymbols() {
    this.includeSymbols = !this.includeSymbols; // The opposite of whatever I am.
  }

  // METHOD: USE LETTERS
  // The user is determining whether or not they want to include letters in the password generated.
  public useLetters() {
    this.includeLetters = !this.includeLetters; // The opposite of whatever I am.
  }

  // INTERPOLATION: Calling A Method instead of displaying a final value.
  // public showPassword() {
  //   console.log('Calling A Method instead of displaying a final value.');
  //   return 'The Current Password Is WUTANG';
  // }
}
