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
import {AuthService} from "./header/auth.service";
import { FormsModule } from "@angular/forms";
import {EnterService} from "./contents/login/enter/enter.service";
import {ContentService} from "./contents/content.service";
import { UserRoomComponent } from './header/user-room/user-room.component';
import {AuthGuard} from "./auth.guard";
import { TokenInterceptorService } from "./token-interceptor.service";

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





  ],
  providers: [
    AuthService,
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
