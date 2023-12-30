import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent  implements OnInit{

  constructor(public cart:Cart){

  }

  ngOnInit(): void {

  }
  extractValue(event: Event): number {
    const target = event.target as HTMLInputElement;
    const inputValue = target.value.trim();

    const numericValue = parseFloat(inputValue);
    return isNaN(numericValue) ? 0 : numericValue;
  }


}
