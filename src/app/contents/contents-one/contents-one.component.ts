import {Component, EventEmitter, Injectable, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ContentService} from "../content.service";
import {Router, NavigationExtras} from "@angular/router";
import {HeaderService} from "../../header/header.service";
import { Item } from "../../item"

@Injectable()

@Component({
  selector: 'app-contents-one',
  templateUrl: './contents-one.component.html',
  styleUrls: ['./contents-one.component.css']
})





export class ContentsOneComponent implements OnInit {


  items;



  constructor(private contentServise: ContentService,
              private router: Router,
             private headerServise: HeaderService) { }




  ngOnInit() {
    this.getAllItems();
    this.headerServise.cool = this.toBasket;
    console.log(this.headerServise.cool = this.toBasket);
  }

  // підписка і респонс на категорії
  getAllItems() {
    this.headerServise.getAllItems().subscribe(
      (response) => {
        this.items = response.body.response.body;
        console.log( this.items)
      },
      err => console.log(err)
    )
  }


//передаєм вибраний елемент в корзину


  public toBasket(item) {

   return this.headerServise.cool = item


  }







//передаєм вибраний елемент в детальний опис
  goToShopItem(item) {
    return this.router.navigate(['/item']);
    // console.log(item);
  }

}
