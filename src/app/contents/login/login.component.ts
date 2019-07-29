import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  // addSingle() {
  //   this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  // }




  display: boolean = false;

  showDialog() {
    this.display = true;
  }



}
