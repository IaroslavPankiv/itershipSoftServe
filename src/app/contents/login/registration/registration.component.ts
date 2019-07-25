import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthorService} from "./author.service";
import User  from "../../../user";
import {Router} from "@angular/router";




@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  userModel = new User
  (
    '',
    '',
    '',
    '',
    '',
    '',


  );
  constructor(private _auth: AuthorService,
              private router: Router) { }



  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }





  clearUser(){
    this.userModel = new User
    (
      '',
      '',
      '',
      '',
      '',
      '',

    );
  }

  ngOnInit() {
  }



  registerUser() {
    console.log(this.userModel)
    this._auth.enroll(this.userModel)
      .subscribe(
        res => {
          console.log('Success ', res)
          this.router.navigate(['/login/enter'])
          },
         err => console.log(err)
  );




  }






}
