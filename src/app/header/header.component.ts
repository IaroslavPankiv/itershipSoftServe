import {Component, Output, Input, OnInit, EventEmitter} from '@angular/core';
import {EnterService} from "../contents/login/enter/enter.service";
import {HttpResponse} from "@angular/common/http";
import {DialogModule} from 'primeng/dialog';
import User from '../user';
import {HeaderService} from "./header.service";





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



log = this.isInvalid();




user = this.enterServise.isLoggedIn();

  constructor(private enterServise: EnterService,
              private headerServise: HeaderService) { }

  ngOnInit() {




  }




//  підписка і респонс на всі items
//   public getAllItems() {
//     this.headerServise.getAllItems().subscribe(
//       (response: HttpResponse<any>) => {
//         this.items = response.body
//         err => console.log(err)
//       }
//     )
//   }


 // підписка і респонс на категорії
//   public getCategory() {
//     this.headerServise.getCategory().subscribe(
//       (response: HttpResponse<any>) => {
//         console.log(response)
//         err => console.log(err)
//       }
//     )
//   }




  isInvalid() {
    if (localStorage.getItem('token')) {
      return false
    }

    return true

  }









}



