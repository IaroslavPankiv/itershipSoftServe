import {Component, OnInit, Input, ViewChild, EventEmitter, Output} from '@angular/core';
import {HeaderService} from "../../header/header.service";






@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {





item:{};
    constructor(private headerServese: HeaderService) { }

  ngOnInit() {

    console.log(this.item = this.headerServese.cool);
    this.item = this.headerServese.cool
  }





}
