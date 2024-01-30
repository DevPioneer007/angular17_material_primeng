import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DrillerStepperComponent } from '../../../driller-stepper/driller-stepper.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-permit-lookup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DrillerStepperComponent,
    NgCircleProgressModule,
  ],
  templateUrl: './permit-lookup.component.html',
})
export class PermitLookupComponent implements OnInit {

  curStep = 1;
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
