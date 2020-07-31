import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToyServiceService } from '../service/toy-service.service';
@Component({
  selector: 'app-toys-list',
  templateUrl: './toys-list.component.html',
  styleUrls: ['./toys-list.component.css'],
})
export class ToysListComponent implements OnInit {
  myForm: any;
  ages = ['3', '5', '7', '9'];
  searchClicked = false;
  toys: any;

  constructor(private fb: FormBuilder, private toyService: ToyServiceService) {
    this.myForm = this.fb.group({
      age: [''],
      gender: [''],
    });
    this.toys = toyService.getToys();
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
