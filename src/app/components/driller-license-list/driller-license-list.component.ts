import { Component, Input, OnInit } from '@angular/core';
import { DrillerLicenseProps } from '../../interfaces/driller-license-props';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-driller-license-list',
  standalone: true,
  imports: [MatProgressBarModule, RouterLink, CommonModule],
  templateUrl: './driller-license-list.component.html',
})
export class DrillerLicenseListComponent implements OnInit {
  @Input() oneChoice!: DrillerLicenseProps;

  ngOnInit(): void {
  }
}
