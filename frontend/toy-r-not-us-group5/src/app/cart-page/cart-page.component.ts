import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToyServiceService } from '../service/toy-service.service';
const mapCarrier = {
  kerry: 1.12,
  EMS: 0.96,
  lineman: 0.64,
};

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  quantityForm: FormGroup;
  carts: any;
  totalPrice: number;
  itemTotal: number;
  form: FormGroup;
  currentlySelectedCarrierPrice: number;

  constructor(private fb: FormBuilder, private toyService: ToyServiceService) {}

  ngOnInit(): void {
    this.quantityForm = this.fb.group({
      quantity: [''],
    });
    this.form = this.fb.group({
      carrier: ['', Validators.required],
    });

    this.carts = this.toyService.getCurrentCartItems();
    this.totalPrice = this.carts[0].price;
    this.itemTotal = this.carts[0].price;
    this.currentlySelectedCarrierPrice = 0;
    console.log(this.form);
  }

  get carrier() {
    return this.form.get('carrier').value;
  }

  get quantity() {
    return this.quantityForm.get('quantity').value;
  }

  onChangeCarrier(event) {
    const { value } = event.target;
    this.totalPrice -= this.currentlySelectedCarrierPrice;
    if (value === 'kerry') {
      this.totalPrice += mapCarrier.kerry;
      this.currentlySelectedCarrierPrice = mapCarrier.kerry;
    } else if (value === 'EMS') {
      this.totalPrice += mapCarrier.EMS;
      this.currentlySelectedCarrierPrice = mapCarrier.EMS;
    } else {
      this.totalPrice += mapCarrier.lineman;
      this.currentlySelectedCarrierPrice = mapCarrier.lineman;
    }
    // alert(JSON.stringify(event.target.value));
  }
}
