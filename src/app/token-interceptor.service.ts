import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor  } from "@angular/common/http";
import { EnterService } from "./contents/login/enter/enter.service";





@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  //
  intercept(req:any, next:any) {
    let enterService = this.injector.get(EnterService)
    console.log(enterService)
    let tokenizedReq:any = req.clone({
      setHeaders: {

      Authorization: `Bearer ${enterService.getToken()}`
  }
  })
    return next.handle(tokenizedReq)


  }
}
