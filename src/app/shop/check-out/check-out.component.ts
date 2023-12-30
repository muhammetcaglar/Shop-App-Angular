import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from 'src/app/model/order.model';
import { OrderRepository } from 'src/app/model/order.repository';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  orderSent: boolean = false;
  submitted: boolean = false;
  @ViewChild('form') form!: NgForm;

  constructor(public order: Order, private orderRepository: OrderRepository) {}

  ngOnInit(): void {}

  submitOrder(): void {
    console.log('Submit order function started');
    console.log('Form validity:', this.form.valid);

    this.submitted = true;

    if (this.form.valid) {
      console.log('Form is valid. Submitting order...');

      this.orderRepository.saveOrder(this.order)
        .subscribe(
          order => {
            console.log('Order saved successfully:', order);
            this.order.clearOrder();
            this.orderSent = true;
            this.submitted = false;
          },
          error => {
            console.error('Error submitting order:', error);
            this.submitted = false;
          }
        );
    } else {
      console.log('Form is not valid. Cannot submit.');
    }
  }
}
