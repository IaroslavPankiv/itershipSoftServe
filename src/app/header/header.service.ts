import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private someUrl = "https://e-shop-auth.herokuapp.com/users/auth"


  constructor(private http: HttpClient) { }

// берем всі items
  // getAllItems() {
  //
  //   const requestHeaders = {
  //     'Authorization': 'Bearer ' + localStorage.getItem('token'),
  //     'Auth-Method': 'get',
  //     'Auth-URL': '',
  //     'Content-Type': 'application/json'
  //
  //   };
  //   return this.http.post<any>(this.someUrl,{ headers: requestHeaders , observe: 'response'})
  // }


//берем категорії товірів
  getCategory() {

      const requestHeaders = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Auth-Method': 'get',
        'Auth-URL': '',
        'Content-Type': 'application/json'

      };
      return this.http.post<any>(this.someUrl,{ headers: requestHeaders , observe: 'response'})
    }




}

