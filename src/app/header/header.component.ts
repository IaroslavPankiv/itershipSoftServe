import {Component, Output, Input, OnInit, EventEmitter} from '@angular/core';
import {EnterService} from "../contents/login/enter/enter.service";
import {HttpResponse} from "@angular/common/http";
import {DialogModule} from 'primeng/dialog';
import User from '../user';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



log = this.isInvalid();




user = this.enterServise.isLoggedIn();

  constructor(private enterServise: EnterService) { }

  ngOnInit() {




  }





  // public getUserIn() {
  //   this.enterServise.getUsers().subscribe(
  //     (response: HttpResponse<any>) => {
  //       this.user = response.body
  //       err => console.log(err)
  //     }
  //   )
  // }


  isInvalid() {
    if (localStorage.getItem('token')) {
      return false
    }
    return true
  }









}



