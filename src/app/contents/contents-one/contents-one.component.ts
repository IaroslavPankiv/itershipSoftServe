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

  math:boolean;



  constructor(private contentServise: ContentService,
              private router: Router,
             public headerServise: HeaderService,
            ) { }


  ngOnInit() {
    console.log(this.headerServise.products);
    this.itemsOfCategory(3);
// localStorage.removeItem("ids")

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
 goToBasket(item) {
   item.InBasket = true;
   console.log(item);
   const it = this.headerServise.products.find(ite => ite.id === item.id);
   if (it == undefined) {
     this.headerServise.products.push(item);
     localStorage.setItem('products', JSON.stringify(this.headerServise.products));
   }

   }






  goToShopItem(item) {
    this.router.navigate(['/item']);

    return this.headerServise.toShopItem = item;

  }

}
