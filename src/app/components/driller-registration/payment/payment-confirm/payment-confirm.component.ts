import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DrillerStepperComponent } from '../../../driller-stepper/driller-stepper.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-confirm',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DrillerStepperComponent,
    ProgressBarModule,
    RadioButtonModule,
    FormsModule
  ],
  templateUrl: './payment-confirm.component.html',
})
export class PaymentConfirmComponent implements OnInit {

  curStep = 2;
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
  selectedPaymentMethod: string = 'card';

  constructor() { }
  ngOnInit(): void {
  }
}
