import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import  User  from "../../../user";


//хедер
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthorService {




  registerUrl = "https://e-shop-auth.herokuapp.com/users/register"

  // https://e-shop-auth.herokuapp.com/users/login
  constructor(private http: HttpClient) { }



    enroll(user: User) {
      return this.http.post<any>(this.registerUrl, user)
    }


// відправляє дані реєстрації на сервер
//   registerUser(user) {
//     return this.http.post<any>(this.registerUrl, user,  httpOptions)

  // }

}
