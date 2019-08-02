import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentsComponent } from './contents/contents.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderModule} from "./header/header/header.module";
import {MatFormFieldModule} from '@angular/material/form-field';
import {HeaderService} from "./header/header.service";
import { FormsModule } from "@angular/forms";
import {EnterService} from "./contents/login/enter/enter.service";
import {ContentService} from "./contents/content.service";
import { UserRoomComponent } from './header/user-room/user-room.component';
import {AuthGuard} from "./auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";

import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { JwtModule } from "@auth0/angular-jwt";




export function tokenGetter() {
  return localStorage.getItem("token");
}








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentsComponent,
    FooterComponent,
    routingComponents,
    UserRoomComponent,







  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MatFormFieldModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4200",'https://e-shop-auth.herokuapp.com/users/auth',
          'https://e-shop-auth.herokuapp.com/users/login',
          'https://e-shop-auth.herokuapp.com/users/me'
        ],

        blacklistedRoutes: [""],
        skipWhenExpired: true
      }
    }),
    DialogModule,
    ToastModule





  ],
  providers: [
    HeaderService,
    EnterService,
    ContentService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
