import {Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ContentService} from "../content.service";
import {Router, NavigationExtras} from "@angular/router";
import {HeaderService} from "../../header/header.service";
import { Item } from "../../item"
import {HeaderComponent} from "../../header/header.component";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-contents-one',
  templateUrl: './contents-one.component.html',
  styleUrls: ['./contents-one.component.css']
})





export class ContentsOneComponent implements OnInit {


  items: {};



  constructor(private contentServise: ContentService,
              private router: Router,
             public headerServise: HeaderService,
            ) { }


  ngOnInit() {
    this.itemsOfCategory(3);


  }


  // підписка і респонс на на всі товари
   public getAllItems() {
    this.headerServise.getAllItems().subscribe(
      (response) => {
        this.items = response.body.response.body;
        console.log(this.items)

      },
      err => console.log(err)
    );
  };

//
  public itemsOfCategory(count) {
    this.headerServise.itemsSrvisePhone(count).subscribe(
      (response) => {
        this.items = response.body.response.body;


      },
      err => console.log(err)
    )
  }






//передаєм вибраний елемент в корзину
 // goToBasket(item) {
 //   console.log(item);
 //   this.headerServise.toBastetItems.push(item)
 // }






  goToShopItem(item) {
    this.router.navigate(['/item']);
    return this.headerServise.toShopItem = item

  }

}
