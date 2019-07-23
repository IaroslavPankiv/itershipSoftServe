import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";




@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {



  constructor() { }



  // intercept(rec, next) {
  //   let tokenizedReq = req.clone({
  //     setHeaders: {
  //       Authorization: 'Bearor yy.yy.zz'
  //     }
  //   })
  //   return next.hendle(tokenizedReq)
  // }
}
