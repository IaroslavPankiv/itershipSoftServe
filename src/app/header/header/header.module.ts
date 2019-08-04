import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import {MatInputModule} from "@angular/material/input";
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatSidenavModule,
  MatTooltipModule,
  MatToolbarModule,
  MatExpansionModule,
  MatDialogModule,
  MatMenuModule,
  MatFormFieldModule,
  MatCardModule,
  MatSnackBarModule,
  MatListModule,
  MatTabsModule





} from "@angular/material";
import {MatBadgeModule} from "@angular/material/badge";
import { FormsModule } from "@angular/forms";



const MaterialComponents = [
  MatMenuModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatTooltipModule,
  MatToolbarModule,
  MatExpansionModule,
  MatDialogModule,
  MatMenuModule,
  MatFormFieldModule,
  FormsModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule,
  MatListModule,
  MatIconModule,
  MatTabsModule





];
@NgModule({
  declarations: [],
  imports: [
    MaterialComponents,
    HttpClientModule,
    FormsModule],
  exports: [MaterialComponents]
})
export class HeaderModule { }
