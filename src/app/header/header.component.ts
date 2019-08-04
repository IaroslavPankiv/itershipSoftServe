import {Component, Output, Input, OnInit, EventEmitter, ViewChild, Injectable} from '@angular/core';
import {EnterService} from "../contents/login/enter/enter.service";
import {HttpResponse} from "@angular/common/http";

import User from '../user';
import {HeaderService} from "./header.service";
import {ContentsOneComponent} from "../contents/contents-one/contents-one.component";





@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

items;

log = this.isInvalid();



user = this.enterServise.isLoggedIn();

  constructor(private enterServise: EnterService,
              public headerServise: HeaderService,
             public  one: ContentsOneComponent) { }




  ngOnInit() {
    this.isInvalid()
    // console.log(this.headerServise.itemsIphone());
// this.headerServise.getAllItems()
  }


  isInvalid() {
    if (localStorage.getItem('token')) {
      return false
    }

    return true

  }









}



