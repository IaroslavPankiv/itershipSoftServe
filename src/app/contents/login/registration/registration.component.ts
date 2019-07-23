import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthorService} from "./author.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerUserData = {};

  constructor(private _auth: AuthorService) { }







  //валідація
  // hide = true;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //     this.email.hasError('email') ? 'Not a valid email' :
  //       '';
  // }








  ngOnInit() {
  }



  registerUser() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
         err => console.log(err)
  );
  }






}
