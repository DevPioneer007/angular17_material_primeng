import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DrillerStepperComponent } from '../../../driller-stepper/driller-stepper.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-complete',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DrillerStepperComponent,
  ],
  templateUrl: './payment-complete.component.html',
})
export class PaymentCompleteComponent implements OnInit {

  curStep = 3;
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
