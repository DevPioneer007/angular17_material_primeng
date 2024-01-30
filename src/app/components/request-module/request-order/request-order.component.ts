import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { DashboardRecordComponent } from '../../dashboard/record/dashboard-record.component';
import { StepperComponent } from '../../stepper/stepper.component';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-request-order',
  standalone: true,
  imports: [
    CommonModule,
    ProgressBarModule,
    RouterLink,
    DashboardRecordComponent,
    StepperComponent,
    InputTextModule
  ],
  templateUrl: 'request-order.component.html'
})
export class RequestOrderComponent implements OnInit {

  records = new Array(3);
  curStep: number = 1;
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

  public files: File[] = [];

  onFilesSelected(event: Event) {
    const selectedFiles = (<HTMLInputElement>event.target).files;
    if (selectedFiles) {
      this.files = Array.from(selectedFiles);
    };
  }

  onFilesDropped(event: DragEvent) {
    event.preventDefault();
    const transferredFiles = event.dataTransfer?.files;
    if (transferredFiles) {
      this.files = Array.from(transferredFiles);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault(); // This is needed to activate the 'drop' event
  }

  constructor() { }

  ngOnInit(): void {

  }

}
