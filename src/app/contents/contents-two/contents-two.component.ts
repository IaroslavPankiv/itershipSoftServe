import { Component, OnInit } from '@angular/core';
import {HeaderService} from "../../header/header.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contents-two',
  templateUrl: './contents-two.component.html',
  styleUrls: ['./contents-two.component.css']
})
export class ContentsTwoComponent implements OnInit {

items: {}
  constructor(public headerServise: HeaderService,
              private router: Router,) { }

  ngOnInit() {
    this.itemsOfCategory(4)
  }

// виводить категорію Samsung
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



}
