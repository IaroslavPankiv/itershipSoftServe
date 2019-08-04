import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import User from "../../../user";







@Injectable({
  providedIn: 'root'
})
export class EnterService {
  loginUrl = "https://e-shop-auth.herokuapp.com/users/login";
  userNameUrl = "https://e-shop-auth.herokuapp.com/users/";

   private authUrl = 'https://e-shop-auth.herokuapp.com/users/auth'
  constructor(private http: HttpClient,
              private jwtHelper: JwtHelperService) { }

user: User;



  // відвилає дані користувача який хоче зайти
  loginUser(user) {
    console.log(user);
    const requestHeader = {'Content-Type':  'application/json'};
    return this.http.post<any>(this.loginUrl, JSON.stringify(user), { headers: requestHeader, observe: 'response' } )



  }

  // провіряє  чи є токет в LS (true !true)
  loggerIn() {
     return !!localStorage.getItem('token')
  }

  //бере токет з LS
  getToken() {
     return localStorage.getItem('token')
  }
//виходить з акаунта
  logOut() {
     return localStorage.removeItem('token')
  }



  isLoggedIn() {
    const jwt = localStorage.getItem('token');
    if ( jwt == null) {
      return false

    }
  const helper = new JwtHelperService();
    const decodedToken =  helper.decodeToken(jwt);

    return decodedToken;


  }











  // виводить зареєстрованого користавача
  getUsers() {
    const id = this.isLoggedIn()
    const requestHeaders = {'Authorization': 'Bearer ' + localStorage.getItem('token') };
    return this.http.get<any>(
      this.userNameUrl + id.uid,
      { headers: requestHeaders , observe: 'response'}
    );
  }















}
