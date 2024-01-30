import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepperComponent } from '../../stepper/stepper.component';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-payment',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    StepperComponent,
    InputTextModule,
    RadioButtonModule,
    FormsModule
  ],
  templateUrl: 'request-payment.component.html'
})
export class RequestPaymentComponent implements OnInit {

  curStep: number = 2;
  steps = [
    {
      id: 1,
      name: "Application"
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
