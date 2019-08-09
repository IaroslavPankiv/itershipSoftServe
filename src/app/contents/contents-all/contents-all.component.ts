import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../header/header.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contents-all',
  templateUrl: './contents-all.component.html',
  styleUrls: ['./contents-all.component.css']
})
export class ContentsAllComponent implements OnInit {

  items: {};




  constructor(public headerServise: HeaderService,
              private router: Router,) {
  }






  ngOnInit() {
    this.getAllItems()
  }


//берем всі товари
  public getAllItems() {
    this.headerServise.getAllItems().subscribe(
      (response) => {
        this.items = response.body.response.body;
        console.log(this.items)

      },
      err => console.log(err)
    );
  };


  //передаємо в component item
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
