import {Component, OnInit, Input, Output} from '@angular/core';
import {EnterService} from "./enter.service";
import { Router} from "@angular/router";
import  User  from "../../../user";
import {HttpResponse} from "@angular/common/http";





@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.css']
})



// export class EnterComponent { @Input() user
// }


export class EnterComponent implements OnInit {

  user:any =  {};
  panelOpenState:any;
  hide:any;
  constructor(private enterServise: EnterService,
              private router: Router) { }

  ngOnInit() {

    // this.getsUser();


  }



  signIn(){

    this.enterServise.loginUser(this.user)
      .subscribe((response: HttpResponse<any>) => {

        if (response ) {

          const jwtTokenBody = response.body.access_token;

          console.log(jwtTokenBody);

          localStorage.setItem('token', jwtTokenBody);
          this.router.navigate(['/user']);
        }

        if (this.enterServise.isLoggedIn()){
            const user = this.enterServise.isLoggedIn()
          alert('You are welkome  ' + user.uname)
        }

      },
      err => alert('err'));
  }

  //вхід в акаунт
//   loginUser()
// {
//   this._auth.loginUser(this.user)
//     .subscribe((response: HttpResponse<any>) => {
//         if (response) {
//           let jwtToken = response.body.access_token;
//           localStorage.setItem('token', jwtToken);
//           console.log(jwtToken);
//           this.router.navigate(['/user'])
//         }
//
//         // this._auth.getUser().subscribe(
//         //   res=>res => console.log(res),
//         //   err => console.log(err))
//         // this._auth.getAllUsers().subscribe(
//         //   res => console.log(res),
//         //   err => console.log(err))
//       }
//     );
//
// }




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

