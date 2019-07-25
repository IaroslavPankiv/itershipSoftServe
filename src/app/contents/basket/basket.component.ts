import { Component, OnInit } from '@angular/core';
import { EnterService } from "../login/enter/enter.service";
import {HttpResponse} from "@angular/common/http";
// import  User  from "../../user";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  constructor(private enterServise: EnterService) {
  }
user:{};
  ngOnInit() {

    this.getUser();
    console.log(this.user);
  }


  getUser() {
    this.enterServise.getAllUsers()
      .subscribe(
        (response: HttpResponse<any>) => {
          this.user = response.body
          // if (response) {
          //   console.log(this.user)
          //   err => console.log(err)
          //
          // }


        }
      )


  }

}
