import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import {Item} from "../item";
import {sendComents} from "../contents/shop-item/coments-send-model";


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  toShopItem;
  products: Item[] = window.localStorage.getItem('products')
    ? JSON.parse(window.localStorage.getItem('products'))
    : [];

  toBastetItems:any = [];
  iphone;


  //Віталікова силка
  someUrl = "https://e-shop-auth.herokuapp.com/users/auth";
  userNameUrl = "https://e-shop-auth.herokuapp.com/users/";
  //  коменти
  comentsUrl = "https://comment-web-service.herokuapp.com";
  // основна
  produrtіUrl = 'https://shop-shop.herokuapp.com';

  createOrder = 'https://eshopwebapi20190731043135.azurewebsites.net'

  //https://shop-shop.herokuapp.com/api/shop/products/categories/{categoryId}?categoryId=1


  constructor(public http: HttpClient) {
  }


// берем items товірів
  public getAllItems() {
    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "GET",
      "Auth-URL": this.produrtіUrl + "/api/shop/products",
    };

    return this.http.post<any>(
      this.someUrl, {},
      {headers: requestHeaders, observe: 'response'}
    ).pipe(catchError(err => throwError('Something went wrong')))
  }








// беремо товари по категоріям
  public itemsSrvisePhone(count) {

    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "GET",
      "Auth-URL": this.produrtіUrl + "/api/shop/products/categories/{categoryId}?categoryId=" + count,
    };

    return this.http.post<any>(
      this.someUrl, {},
      {headers: requestHeaders, observe: 'response'}
    )
  }


//беремо всі коментарі до вибраного item
  getComentsForItem(item) {
    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "GET",
      "Auth-URL": this.comentsUrl + "/api/v1/comments/product_comments/" + item.id,
    };

    return this.http.post<any>(
      this.someUrl, {},
      {headers: requestHeaders, observe: 'response'}
    )
  }

// відправляємо коментар
  sendComentsForItem(sendComents,) {
    console.log(sendComents);
    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "POST",
      "Auth-URL": this.comentsUrl + "/api/v1/comments",
      'Content-Type':  'application/json'
    };

    return this.http.post<any>(
      this.someUrl,
      sendComents,
    {headers: requestHeaders, observe: 'response'}
    )
  }


//беремо username афвтора користувача
  getUserComents(user_id) {
    console.log(user_id);
    const requestHeaders = {'Authorization': 'Bearer ' + localStorage.getItem('token')};
    return this.http.get<any>(
      this.userNameUrl + user_id,
      {headers: requestHeaders, observe: 'response'}
    );
  }





  getComentsForUser(user) {

    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "GET",
      "Auth-URL": this.comentsUrl + "/api/v1/comments/user_comments/" + user.uid,
    };

    return this.http.post<any>(
      this.someUrl, {},
      {headers: requestHeaders, observe: 'response'}
    )
  }


  //видаляемо всій коментар
  dellMyComent(coment) {
    console.log(coment.id);
    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "DELETE",
      "Auth-URL": this.comentsUrl + "/api/v1/comments/" + coment.id,
      'Content-Type':  'application/json'
    };

    return this.http.post<any>(
      this.someUrl, {},
      {headers: requestHeaders, observe: 'response'}
    )
  }

  // редагує вибраний власний коментар
  editMyComent(coment, com) {
    console.log(coment.id);
    console.log(com);
    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "PUT",
      "Auth-URL": this.comentsUrl + "/api/v1/comments/"+ coment.id,
      'Content-Type':  'application/json'
    };

    return this.http.post<any>(
      this.someUrl,
      com,
      {headers: requestHeaders, observe: 'response'}
    )
  }





  // получаємо всі товари в корзині
  public getAllItemsFromBasket(id?) {
    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "GET",
      "Auth-URL": this.produrtіUrl + "/api/shop/products/" + id,
    };

    return this.http.post<any>(
      this.someUrl, {},
      {headers: requestHeaders, observe: 'response'}
    ).pipe(catchError(err => throwError('Something went wrong')))
  }





//получаєм номер замовлення
  getOrderId( createOrderss) {

    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "POST",
      "Auth-URL": this.createOrder + "/api/order",
    };

    return this.http.post<any>(
      this.someUrl,
      createOrderss ,
      {headers: requestHeaders, observe: 'response'}
    ).pipe(catchError(err => throwError('Something went wrong')))
  }




  // відправляємо замовлення по одному товару
  sendOrderItem(sendItem) {

    const requestHeaders = {
      "Authorization": "Bearer " + localStorage.getItem('token'),
      "Auth-Method": "POST",
      "Auth-URL": this.createOrder + "/api/order_item",
    };

    return this.http.post<any>(
      this.someUrl,
      sendItem ,
      {headers: requestHeaders, observe: 'response'}
    ).pipe(catchError(err => throwError('Something went wrong')))
  }











}
