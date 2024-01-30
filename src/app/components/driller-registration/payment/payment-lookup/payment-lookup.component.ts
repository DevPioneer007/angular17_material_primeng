import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DrillerStepperComponent } from '../../../driller-stepper/driller-stepper.component';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-payment-lookup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DrillerStepperComponent,
    ProgressBarModule
  ],
  templateUrl: './payment-lookup.component.html',
})
export class PaymentLookupComponent implements OnInit {

  curStep = 1;
  steps = [
    {
      id: 1,
      name: "Payment"
    },
    {
      id: 2,
      name: "Confirm"
    },
    {
      id: 3,
      name: "Completed"
    },
  ];

  constructor() { }
  ngOnInit(): void {
  }
}
