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
  hide = true;

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




}









