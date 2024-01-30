import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DrillerStepperComponent } from '../../../driller-stepper/driller-stepper.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-account-validate',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DrillerStepperComponent,
    NgCircleProgressModule,
  ],
  templateUrl: './account-validate.component.html',
})
export class AccountValidateComponent implements OnInit {

  curStep = 3;
  ratings = new Array(5);
  steps = [
    {
      id: 1,
      name: "Driller Profile Look Up"
    },
    {
      id: 2,
      name: "Validate"
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
