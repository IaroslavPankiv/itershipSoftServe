import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {catchError} from "rxjs/internal/operators";
import {throwError} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  someUrl = "https://e-shop-auth.herokuapp.com/users/auth"
  comentsUrl = "https://comment-web-service.herokuapp.com"
  produrtіUrl = 'https://shop-shop.herokuapp.com'




  cool;

  constructor( private router: Router,
               private http: HttpClient) { }

  goToShopItem() {
    this.router.navigate(['/shopItem']);
  }











}


