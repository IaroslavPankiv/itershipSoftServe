import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthorService} from "./author.service";
import { User } from "../../../user";
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
    'tr',
    'tr',
    'tr',
    'tr',
    'tr'
  );
  constructor(private _auth: AuthorService,
              private router: Router) { }



  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }







  ngOnInit() {
  }



  registerUser() {
    console.log(this.userModel)
    this._auth.enroll(this.userModel)
      .subscribe(
        res => {
          console.log('Success ', res)
          this.router.navigate(['/enter'])
          },
         err => console.log(err)
  );




  }






}
