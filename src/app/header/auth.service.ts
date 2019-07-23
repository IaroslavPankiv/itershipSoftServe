import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private registerUrl = "https://e-shop-auth.herokuapp.com/users/register"


  constructor(private http: HttpClient) { }


  // registerUser(user) {
  //   return this.http.post<any>(this.registerUrl, user)
  // }
}
