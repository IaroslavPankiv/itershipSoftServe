import { Component, OnInit } from '@angular/core';
import { EnterService } from "../login/enter/enter.service";
import {HttpResponse} from "@angular/common/http";
import { User } from "../../user";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private enterServise: EnterService) { }

  user: {}

  ngOnInit() {

    this.enterServise.getAllUsers().subscribe(
      (response: HttpResponse<any>) => {
        console.log(response);
        this.user = response.body,
            err => console.log(err)
      }
    )
  }


}
