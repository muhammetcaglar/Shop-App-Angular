import { NgModule } from "@angular/core";
import { ModelModule } from "../model/model.module";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ShopComponent } from "./shop.component";
import { NavbarComponent } from './navbar/navbar.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
@NgModule({
  imports:[ModelModule,BrowserModule,FormsModule,RouterModule],
  declarations:[ShopComponent, NavbarComponent, CardSummaryComponent, CartDetailComponent, CheckOutComponent, ProductListComponent, CategoryListComponent],
  exports:[ShopComponent,CartDetailComponent, CheckOutComponent]
})
export class ShopModule{}
