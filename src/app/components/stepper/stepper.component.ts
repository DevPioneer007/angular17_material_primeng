import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DrillerLicenseProps } from '../../interfaces/driller-license-props';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Step } from '../../interfaces/step';

@Component({
  selector: 'app-stepper',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [MatProgressBarModule, RouterLink, CommonModule],
  templateUrl: './stepper.component.html',
})
export class StepperComponent implements OnInit {

  @Input() curStep: number = 1;
  @Input() steps: Step[] = [];

  items = new Array();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = new Array(this.steps.length * 2 - 1);
  }
}
