import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['./toys-list.component.css'],
})
export class ToysListComponent implements OnInit {
  myForm: any;
  ages = ['3', '5', '7', '9'];
  toys = [
    {
      id: 15,
      name: 'sailboat',
      gender: 'male',
      age: 9,
      brand: 'CoolKidz',
      price: 24.95,
    },
  ];
  searchClicked = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      age: [''],
      gender: [''],
    });
  }

  get age() {
    return this.myForm.get('age').value;
  }

  get gender() {
    return this.myForm.get('gender').value;
  }

  onSubmit() {
    // Simulate the api calling here
    // alert(JSON.stringify(this.myForm.value));
    this.searchClicked = true;
  }

  ngOnInit(): void {}
}
