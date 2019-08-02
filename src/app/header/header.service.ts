import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import {Item} from "../item";


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  cool:{};



  someUrl = "https://e-shop-auth.herokuapp.com/users/auth"
  comentsUrl = "https://comment-web-service.herokuapp.com"
  produrtіUrl = 'https://shop-shop.herokuapp.com'


  constructor(private http: HttpClient) { }




// берем items товірів
  getAllItems() {

    const requestHeaders = {
      "Authorization":  "Bearer " + localStorage.getItem('token'),
      "Auth-Method":  "GET",
      "Auth-URL": this.produrtіUrl + "/api/shop/products",
    };

    return this.http.post<any>(
      this.someUrl, {},
      { headers: requestHeaders, observe: 'response'}
    ).pipe(catchError(err => throwError('Something went wrong')))
  }



}

