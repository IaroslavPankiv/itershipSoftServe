import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EnterService } from "./contents/login/enter/enter.service";

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private EnterService: EnterService,
              private router: Router) {}

   // провірка на тру-фалсе
   canActivate(): boolean{
    if (this.EnterService.loggerIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
   }

   // canActivate():boolean{
   //  if (this.EnterService.getUsers()){
   //    return false
   //  }
   // }
}
