import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShopModule } from './shop/shop.module';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ShopComponent
  ],
})
export class AppModule { }
