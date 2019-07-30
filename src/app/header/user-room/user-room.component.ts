import {Component, OnInit, Output} from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {EnterService} from "../../contents/login/enter/enter.service";
import User  from "../../user";


@Component({
  selector: 'app-user-room',
  templateUrl: './user-room.component.html',
  styleUrls: ['./user-room.component.css']
})
export class UserRoomComponent implements OnInit {
// user: User[];

 user = new User('','','','','');

whooIsUser:boolean;
 whooUser  = this.enterServise.isLoggedIn()

  constructor(private enterServise: EnterService) { }




  ngOnInit() {
    this.getUserIn()
    this.getAdmin()

  }

  public getUserIn() {
  this.enterServise.getUsers().subscribe(
    (response: HttpResponse<any>) => {
      this.user = response.body
        err => console.log(err)
    }
  )
}





getAdmin() {
  console.log(this.whooUser);
  if (this.whooUser.urole === "admin"){

    return this.whooIsUser = true
  }else{
    return this.whooIsUser = false
  }

}







logauut(){
  this.enterServise.logOut();
  window.location.reload();
}



}
