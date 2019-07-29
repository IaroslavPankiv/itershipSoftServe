import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContentsOneComponent} from "./contents/contents-one/contents-one.component";
import {ContentsTwoComponent} from "./contents/contents-two/contents-two.component";
import {ContentsThreeComponent} from "./contents/contents-three/contents-three.component";
import {LoginComponent} from "./contents/login/login.component";
import {BasketComponent} from "./contents/basket/basket.component";
import {RegistrationComponent} from "./contents/login/registration/registration.component";

import {EnterComponent} from "./contents/login/enter/enter.component";
import {UserRoomComponent} from "./header/user-room/user-room.component";
import {AuthGuard} from "./auth.guard";
// import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  { path: 'one', component: ContentsOneComponent},
  { path: 'two', component: ContentsTwoComponent},
  { path: 'three', component: ContentsThreeComponent},
  { path: 'login', component: LoginComponent},

  { path: 'basket', component: BasketComponent},
  { path: 'login/registration', component: RegistrationComponent},
  { path: 'login/enter', component: EnterComponent,
    },

  { path: 'user', component: UserRoomComponent,
  canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ContentsOneComponent,
  ContentsTwoComponent,
  ContentsThreeComponent,
  LoginComponent,
  BasketComponent,
  RegistrationComponent,
  EnterComponent
]
