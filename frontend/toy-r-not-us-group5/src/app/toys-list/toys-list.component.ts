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
    alert(JSON.stringify(this.myForm.value));
  }

  ngOnInit(): void {}
}
