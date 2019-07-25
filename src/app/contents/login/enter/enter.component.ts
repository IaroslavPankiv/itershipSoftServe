import { Component, OnInit } from '@angular/core';
import {EnterService} from "./enter.service";
import { Router} from "@angular/router";

import {HttpResponse} from "@angular/common/http";




@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})
export class EnterComponent implements OnInit {
  loginUserData = {};



  constructor(private _auth: EnterService,
              private router: Router) { }

  ngOnInit() {
  }





  //вхід в акаунт
  loginUser() {




    this._auth.loginUser(this.loginUserData)
      .subscribe((res: HttpResponse<any>) => {

        if (res ) {
          let jwtToken = res.body.access_token;
          localStorage.setItem('token', jwtToken);
          console.log(jwtToken);
          this.router.navigate(['/user'])
        }

            // this._auth.getUser().subscribe(
            //   res=>res => console.log(res),
            //   err => console.log(err))
          // this._auth.getAllUsers().subscribe(
          //   res => console.log(res),
          //   err => console.log(err))
      }

      );



  }


//   loginUserWithTokens() {
//     this._auth.loginUserWithToken(this.loginUserData).subscribe(
//       res => {
//         console.log(res),
//           this.router.navigate(['/basket']),
//           err => console.log(err)
//       }
//   )
//
// }





}

