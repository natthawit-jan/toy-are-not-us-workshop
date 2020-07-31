import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-thank-page',
  templateUrl: './thank-page.component.html',
  styleUrls: ['./thank-page.component.css'],
})
export class ThankPageComponent implements OnInit {
  generatedValue: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.generatedValue = params['gen'];
    });
  }
}
