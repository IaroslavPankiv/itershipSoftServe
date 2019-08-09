import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../header/header.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contents-three',
  templateUrl: './contents-three.component.html',
  styleUrls: ['./contents-three.component.css']
})
export class ContentsThreeComponent implements OnInit {

  items: {}




  constructor(public headerServise: HeaderService,
              private router: Router,) { }

  ngOnInit() {
    this.itemsOfCategory(5)
  }



// виводить категорію Huawey
  public itemsOfCategory(count) {
    this.headerServise.itemsSrvisePhone(count).subscribe(
      (response) => {
        this.items = response.body.response.body;


      },
      err => console.log(err)
    )
  }

//передаєм вибраний елемент в детальний опис
  goToShopItem(item) {
    this.router.navigate(['/item']);
    return this.headerServise.toShopItem = item

  }


  goToBasket(item) {
    item.InBasket = true;
    console.log(item);
    const it = this.headerServise.products.find(ite => ite.id === item.id);
    if (it == undefined) {
      this.headerServise.products.push(item);
      localStorage.setItem('products', JSON.stringify(this.headerServise.products));
    }

  }



}
