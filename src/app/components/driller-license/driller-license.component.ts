import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DrillerLicenseProps } from '../../interfaces/driller-license-props';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driller-license',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [MatProgressBarModule, RouterLink, CommonModule],
  templateUrl: './driller-license.component.html',
})
export class DrillerLicenseComponent implements OnInit {
  @Input() oneChoice!: DrillerLicenseProps;

  ngOnInit(): void {
  }
}
