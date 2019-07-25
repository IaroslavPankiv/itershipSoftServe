import { Component, OnInit } from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {EnterService} from "../../contents/login/enter/enter.service";
import User  from "../../user";


@Component({
  selector: 'app-user-room',
  templateUrl: './user-room.component.html',
  styleUrls: ['./user-room.component.css']
})
export class UserRoomComponent implements OnInit {


 user = new User
  (
  '',
  '',
  '',
  '',
  '',
  '',


);


  constructor(private enterServise: EnterService) { }




  ngOnInit() {
    this.enterServise.getAllUsers().subscribe(
      (response: HttpResponse<any>) => {
        console.log(response);
        this.user = response.body,
          err => console.log(err)
      }
    )

  }


logauut(){
  this.enterServise.logOut();
  window.location.reload();
}



}
