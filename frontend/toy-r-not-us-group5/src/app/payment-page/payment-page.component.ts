import { Component, OnInit } from '@angular/core';
import { ToyServiceService } from '../service/toy-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const mapCarrier = {
  kerry: 1.12,
  EMS: 0.96,
  lineman: 0.64,
};
@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  carts: any;
  totalPrice: number;
  shipping_price: number;
  form: FormGroup;
  grandTotal: number;
  creditSelected = false;
  debitSelected = false;
  genValue: string;

  constructor(private fb: FormBuilder, private toyService: ToyServiceService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      paymentMethod: ['', Validators.required],
    });

    this.carts = this.toyService.getCartWithCurrentMethod('Kerry');
    this.totalPrice = this.carts[0].price;
    this.shipping_price = mapCarrier.kerry;
    this.grandTotal = this.totalPrice + this.shipping_price;
    this.genValue = this.toyService.getGenValue();
  }

  get paymentMethod() {
    return this.form.get('paymentMethod').value;
  }

  onDelete(id: number) {
    // add logic at later time
    this.carts = [];
  }

  onChange(event) {
    // alert(JSON.stringify(event.target.value));
    const { value } = event.target;
    if (value === 'creditCard') {
      this.debitSelected = false;
      this.creditSelected = true;
    } else if (value === 'Debit') {
      this.creditSelected = false;

      this.debitSelected = true;
    }
  }
}
