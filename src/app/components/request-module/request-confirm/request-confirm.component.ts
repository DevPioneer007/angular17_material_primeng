import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StepperComponent } from '../../stepper/stepper.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-request-confirm',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    StepperComponent,
    CalendarModule,
    FormsModule
  ],
  templateUrl: 'request-confirm.component.html'
})
export class RequestConfirmComponent implements OnInit {

  curStep: number = 3;
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
  rangeDates: any;

  constructor() { }

  ngOnInit(): void {

  }

}
