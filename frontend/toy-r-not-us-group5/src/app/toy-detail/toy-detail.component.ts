import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-toy-detail',
  templateUrl: './toy-detail.component.html',
  styleUrls: ['./toy-detail.component.css'],
})
export class ToyDetailComponent implements OnInit {
  toy = {
    id: 15,
    name: 'sailboat',
    gender: 'male',
    age: 9,
    brand: 'CoolKidz',
    price: 24.95,
    avaliable: true,
  };
  quantityForm: any;

  constructor(private fb: FormBuilder) {
    this.quantityForm = this.fb.group({
      quantity: [''],
    });
  }

  ngOnInit(): void {}
}
