import {Component, OnInit, Output} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {EnterService} from "../../contents/login/enter/enter.service";
import User  from "../../user";
import {HeaderService} from "../header.service";
import {sendComents} from "../../contents/shop-item/coments-send-model";


@Component({
  selector: 'app-user-room',
  templateUrl: './user-room.component.html',
  styleUrls: ['./user-room.component.css']
})
export class UserRoomComponent implements OnInit {
// user: User[];

  hide = true;
  edit;
  user = new User('', '', '', '', '');
  myComents;
  whooIsUser: boolean;
  whooUser = this.enterServise.isLoggedIn()
  // com = new sendComents("булоби класно ЄЄЄЄ", this.whooUser.id, 13, 0;
    thisComent;


  constructor(private enterServise: EnterService,
              public headerServise: HeaderService) {
  }


  ngOnInit() {
    this.getUserIn()
    this.getAdmin()
    this.getComentsForUser()


  }




  public getUserIn() {
    this.enterServise.getUsers().subscribe(
      (response: HttpResponse<any>) => {
        this.user = response.body
        err => console.log(err)
      }
    )
  }

//провірка адмін чи юзер
  getAdmin() {

    if (this.whooUser.urole === "admin") {

      return this.whooIsUser = !true
    } else {
      return this.whooIsUser = !false
    }

  }


  //вихід з кабенету
  logauut() {
    this.enterServise.logOut();
    window.location.reload();
  }

//всі коментарі поточного користувача
  getComentsForUser() {
    this.headerServise.getComentsForUser(this.whooUser).subscribe(
      (response: HttpResponse<any>) => {
        this.myComents = response.body.response.body;

        console.log(this.myComents);

        err => console.log(err)

      }
    )

  }


// редагує вибраний коментар
  updateMyCometn(coments) {
    this.thisComent = coments
  this.hide = false;

  }

  //видаляє вибраний коментар
  dellMyComent(coment) {
    console.log(coment);
    this.headerServise.dellMyComent(coment).subscribe(
      (response: HttpResponse<any>) => {
        console.log(response);
        err => console.log(err)
      }
    )
    this.getComentsForUser()

  }


  close() {
    this.hide = true;
  }



  sendComentar() {
    const com = new sendComents(this.edit, this.thisComent.user_id, this.thisComent.product_id, 0)
    console.log(this.thisComent);
    console.log(com)
    this.headerServise.editMyComent(this.thisComent, com).subscribe(
      (response: HttpResponse<any>) => {
        console.log(response);
        console.log(response.body.response.status)
        if (response.body.response.status == 200)  {
              alert('your coments its edit');
            this.getComentsForUser()
        }else {
          alert('full')
        }
        err => console.log(err)
      }
    )
    this.hide = true;
    this.getComentsForUser()
    this.edit = ' '


  }






}
