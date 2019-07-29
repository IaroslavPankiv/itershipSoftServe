import { Component, OnInit } from '@angular/core';
import { EnterService } from "../login/enter/enter.service";
import {HttpResponse} from "@angular/common/http";
import User from "../../user";
// import  User  from "../../user";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {


  constructor(private enterServise: EnterService) {

  }

user = this.enterServise.isLoggedIn()



  ngOnInit() {
    // console.log(this.basketUser);


  }


  // public getUserIn() {
  //   this.enterServise.getUsers().subscribe(
  //     (response: HttpResponse<any>) => {
  //       this.user = response.body
  //       err => console.log(err)
  //     }
  //   )
  // }

}
