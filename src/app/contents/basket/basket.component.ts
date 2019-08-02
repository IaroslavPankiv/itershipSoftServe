import { Component, OnInit } from '@angular/core';
import { EnterService } from "../login/enter/enter.service";

import {HttpResponse} from "@angular/common/http";
import User from "../../user";
import {count} from "rxjs/operators";
import {HeaderService} from "../../header/header.service";
// import  User  from "../../user";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

orange = true;
comemnts = this.clickComments();
 count:number = 1;

item = {};



  constructor(private enterServise: EnterService,
              private headerServise: HeaderService) {

  }

user = this.enterServise.isLoggedIn()



  ngOnInit() {
    // console.log(this.basketUser);
  this.headerServise.cool

  }


  clickLiles() {
   if (this.orange == true){
     return this.orange = false
   } else if (this.orange ==false) {
      return this.orange = true
    }


  }

  clickComments(){
    return this.count = this.count + 1
  }
}
