import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DrillerStepperComponent } from '../../../driller-stepper/driller-stepper.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-account-lookup',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    DrillerStepperComponent,
    NgCircleProgressModule,
  ],
  templateUrl: './account-lookup.component.html',
})
export class AccountLookupComponent implements OnInit {

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
