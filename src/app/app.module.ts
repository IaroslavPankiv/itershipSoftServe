import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentsComponent,
    FooterComponent,
    routingComponents,




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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
