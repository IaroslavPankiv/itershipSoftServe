import { Component, OnInit } from '@angular/core';
import { EnterService } from "../login/enter/enter.service";
import User from "../../user";
import {HeaderService} from "../../header/header.service";



@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

orange = true;
comemnts = this.clickComments();
 count:number = 1;

item ;



  constructor(private enterServise: EnterService,
              private headerServise: HeaderService) {

  }

user = {};
  massShopItem = this.headerServise.toShopItem;


  ngOnInit() {

    console.log(this.massShopItem);

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
