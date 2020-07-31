import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToyServiceService } from '../service/toy-service.service';

@Component({
  selector: 'app-toy-detail',
  templateUrl: './toy-detail.component.html',
  styleUrls: ['./toy-detail.component.css'],
})
export class ToyDetailComponent implements OnInit {
  toy: any;
  quantityForm: any;

  constructor(private fb: FormBuilder, private toyService: ToyServiceService) {}

  ngOnInit(): void {
    this.toy = this.toyService.getToyAt(15);

    this.quantityForm = this.fb.group({
      quantity: [''],
    });
  }
}
