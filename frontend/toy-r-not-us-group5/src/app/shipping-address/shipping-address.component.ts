import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css'],
})
export class ShippingAddressComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      fullName: [''],
      addressOne: [''],
      addressTwo: [''],
      city: [''],
      province: [''],
      postcode: [''],
    });
  }

  onSubmit() {
    alert(JSON.stringify(this.myForm.value));
  }
}
