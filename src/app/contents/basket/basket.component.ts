
import { Component, OnInit } from '@angular/core';
import { EnterService } from "../login/enter/enter.service";

import {HeaderService} from "../../header/header.service";

import {Item} from "../../item";
import OrderItem from "./orderItem";
import Order from "./ocreateOrder";









@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  orange = true;
  comemnts = this.clickComments();
  count: number = 1;
  order;
  status;

  // items = [];

  whooUser = this.enterServise.isLoggedIn();





  constructor(private enterServise: EnterService,
              private headerServise: HeaderService) {

  }

  user = {};
  massShopItem = this.headerServise.toShopItem;

  totalPrice;
  products: Item[] ;
  totprise = 0;




  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('products'));
    if (this.products.length ===0 ) {
      this.products = null;
    }
    console.log(this.products);
    // this.products.forEach((i)=> console.log(i))


  }





  dellItemFromBasket(item) {
    console.log(this.products.length);
    if (this.products==undefined) {
      this.products = null;
    }
    console.log(item);
      let delItem = window.localStorage.getItem('products')
        ? JSON.parse(window.localStorage.getItem('products'))
        : toString();

      for (let i = 0; i < delItem.length; i++) {
        if (delItem[i].id === item.id) {
          delItem.splice(i, 1);
          for (let h = 0; h < this.products.length; h++) {
            if (this.products[h].id === item.id) {
              this.products.splice(h, 1);
            }
          }

          i--;
        }
      }

      this.products = delItem;
      this.headerServise.products = delItem



    window.localStorage.setItem('products', JSON.stringify(this.products));

      if (this.headerServise.products.length === 0) {
        this.products = null;
      }

  }



  totalPrise() {

  if (this.products != null ) {
    this.totalPrice = this.products.map((i) => {

      return i.prise * i.quantity
    })



    this.totprise = this.totalPrice.reduce((previous, current) => previous + current);
  }





  }



  clickLiles() {
    if (this.orange == true) {
      return this.orange = false
    } else if (this.orange == false) {
      return this.orange = true
    }
  }

  clickComments() {
    return this.count = this.count + 1
  }


  getItemsForBasket() {
    const itemsInBasket = this.headerServise.toBastetItems;
    console.log(itemsInBasket);
  }


  // getAllItemsFromBasket() {
  //
  //   const ids = window.localStorage.getItem('ids')
  //     ? JSON.parse(window.localStorage.getItem('ids'))
  //     : toString();
  //
  //
  //   ids.forEach((id) => {
  //
  //
  //     this.getitemsforbasket(id)
  //   });
  // }
  //
  //
  // getitemsforbasket(id) {
  //   this.headerServise.getAllItemsFromBasket(id).subscribe(
  //     (response:any) => {
  //       // console.log(JSON.stringify(response.body.response.body.prise));
  //       // console.log(Object.values(response.body.response.body));
  //
  //       this.items.push(response.body.response.body);
  //       // console.log(response.body.response.body)
  //
  //       this.totalPrice.push(response.body.response.body.prise);
  //       // console.log(this.totalPrice)
  //     },
  //     err => console.log(err)
  //   )
  //
  // }
  //




  sendBuy(products) {
    console.log(products)



    let createOrderss = new Order(0, this.whooUser.uid, " ")

    if (products.length == 0){
      console.log('full')
    }else {
      this.headerServise.getOrderId(createOrderss).subscribe(
        (response) => {
          this.order = response.body.response.body;

          console.log(this.order);
          if (response.body.response.status == 201) {
            for (let i = 0; i < products.length; i++) {
              const orderItem = new OrderItem(0, products[i].quantity, this.order, products[i].id)
              console.log(orderItem.quantity)
              if (orderItem.quantity === 0){
                alert(' specify the quantity !' )
              } else {
                this.sendOrderItem(orderItem);
                this.totalPrise();
                window.localStorage.removeItem('products');
                this.products = null
                alert( " order send № " + this.order + " total price " + this.totprise)
              }

            }


          }else {
            alert('full')
          }




        },
        err => console.log(err)


      )
    }



  }









  sendOrderItem(sendItem) {
    this.headerServise.sendOrderItem(sendItem).subscribe(
      (response) => {
        const h = response.body.response;
        console.log(h);

      },
      err => console.log(err)
    )
  }















































  // dellItem(item) {
  //   console.log(item);
  //   let delItem = window.localStorage.getItem('ids')
  //     ? JSON.parse(window.localStorage.getItem('ids'))
  //     : toString();
  //
  //   for (let i = 0; i < delItem.length; i++) {
  //     if (delItem[i] === item.id) {
  //       delItem.splice(i, 1);
  //       for (let h = 0; h < this.items.length; h++) {
  //
  //         if (this.items[h].id === item.id) {
  //           this.items.splice(h, 1);
  //         }
  //       }
  //
  //       i--;
  //     }
  //   }
  //   this.headerServise.localStoragMath = delItem;
  //
  //   window.localStorage.setItem('ids', JSON.stringify(this.headerServise.localStoragMath));
  //   if (delItem.length) {
  //
  //   } else {
  //     this.items = [];
  //   }
  // }








}
