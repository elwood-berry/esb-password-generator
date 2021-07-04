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

  // INTERPOLATION: Calling A Method instead of displaying a final value.
  public showPassword() {
    console.log('Calling A Method instead of displaying a final value.');
    return 'The Current Password Is WUTANG';
  }
}
