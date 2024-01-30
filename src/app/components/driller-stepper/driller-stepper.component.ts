import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Step } from '../../interfaces/step';

@Component({
  selector: 'app-driller-stepper',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [MatProgressBarModule, RouterLink, CommonModule],
  templateUrl: './driller-stepper.component.html',
})
export class DrillerStepperComponent implements OnInit {

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
