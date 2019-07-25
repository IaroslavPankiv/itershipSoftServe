import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



//хедер



@Injectable({
  providedIn: 'root'
})
export class EnterService {
  loginUrl = "https://e-shop-auth.herokuapp.com/users/login";
  userNameUrl = "https://e-shop-auth.herokuapp.com/users/me";

   private authUrl = 'https://e-shop-auth.herokuapp.com/users/auth'
  constructor(private http: HttpClient) { }




  // getEvent() {
  //   return this.http.get<any>(this.eventUrl)
  //
  // }

  // getToken() {
    // return localStorage.getItem("token")
  // }


  // відвилає дані користувача який хоче зайти
  loginUser(user) {
    const httpOptions = {'Content-Type':  'application/json'};
    return this.http.post<any>(this.loginUrl, user, { headers: httpOptions, observe: 'response' } )

  }

  // провіряє  чи є токет в LS (true !true)
  loggerIn() {
     return !!localStorage.getItem('token')
  }

  //бере токет з LS
  getToken() {
     return localStorage.getItem('token')
  }


  // виводить зареєстрованого користавача
  getAllUsers() {
    const requestHeaders = {'Authorization': 'Bearer ' + localStorage.getItem('token') };

    console.log( JSON.stringify(requestHeaders))
    console.log(requestHeaders);
    return this.http.get<any>(
      this.userNameUrl ,
      { headers: requestHeaders , observe: 'response'}
    )
  }





  // let tokenizedReq:any = req.clone({
//       setHeaders: {
//         Content Type: application json,
//       Authorization: `Bearer ${enterService.getToken()}`
//   }

  // заходдить в особиисти кабінет









}
