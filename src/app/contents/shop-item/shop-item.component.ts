import {Component, OnInit, Input, ViewChild, EventEmitter, Output} from '@angular/core';
import {HeaderService} from "../../header/header.service";
import * as _ from "lodash";
import {sendComents} from "./coments-send-model";
import {getSeqNumberGenerator} from "@angular/compiler/src/render3/view/i18n/util";
import {EnterService} from "../login/enter/enter.service";










@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {


  item = this.headerServise.toShopItem;
  userComentator = this.enterServise.isLoggedIn()
  com = new sendComents("", this.userComentator.uid, this.headerServise.toShopItem.id, 0)

  coment;




// itemId = this.item[3]
  constructor(private headerServise: HeaderService,
              public enterServise: EnterService) {
  }

  ngOnInit() {

    // console.log(this.sendComent);
console.log(this.item)
    if (this.item.id != undefined) {
      this.ifShowComents(this.item)
    }

    // console.log(this.coment);


  }


//берем всі соментарі для вибраного товару
  showComentsitem(item) {
    this.headerServise.getComentsForItem(item).subscribe(
      (response) => {

        this.coment = response.body.response.body;
        console.log(this.coment);

        // const g = response.body.response.body
        // for (let i = 0; i < g.length; i++) {
        //   console.log(g[i].user_id)
        //   this.getComentsUser(g[i].user_id)
        //   // g[i] = ;
        //   console.log(g[i]);
        // }
      },
      err => console.log(err)
    )
  }

//провірка
  ifShowComents(item) {
    if (item) {
      this.showComentsitem(item);

    }
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

  // getComentsUser(user_id) {
  //   console.log(user_id)
  //   this.headerServese.getUserComents(user_id).subscribe(
  //     (response) => {
  //       this.userComentator = response.body
  //       console.log(response.body);
  //
  //
  //       // this.userComentator = response.body;
  //       // console.log(this.userComentator);
  //     },
  //     err => console.log(err)
  //   );
  //
  // }






//відправляє комент з даними про товар і користувача
  sendComentar() {
    console.log(this.com)
    this.headerServise.sendComentsForItem(this.com).subscribe(
      (response) => {
        console.log(response);
      },
      err => console.log(err)
          )
    this.ifShowComents(this.item)
  }










}
