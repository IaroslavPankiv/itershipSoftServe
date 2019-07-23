import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  // httpOptions = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'Access-Control-Allow-Methods': 'POST'
  //
  // });



  registerUrl = "https://e-shop-auth.herokuapp.com/users/register"

  // https://e-shop-auth.herokuapp.com/users/login
  constructor(private http: HttpClient) { }







  registerUser(user) {
    return this.http.post<any>(this.registerUrl, user,  httpOptions)

  }

}
