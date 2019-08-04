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


  item = this.headerServese.toShopItem;
  userComentator = this.enterServise.isLoggedIn()
  com = new sendComents("", this.userComentator.uid, this.item.id, 0)

  coment;




// itemId = this.item[3]
  constructor(private headerServese: HeaderService,
              public enterServise: EnterService) {
  }

  ngOnInit() {

    // console.log(this.sendComent);
    console.log(this.item);

    this.ifShowComents(this.item)
    // console.log(this.coment);


  }


//берем всі соментарі для вибраного товару
  showComentsitem(item) {
    this.headerServese.getComentsForItem(item).subscribe(
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
    this.headerServese.sendComentsForItem(this.com).subscribe(
      (response) => {
        console.log(response);
      },
      err => console.log(err)
          )
    this.ifShowComents(this.item)
  }










}
