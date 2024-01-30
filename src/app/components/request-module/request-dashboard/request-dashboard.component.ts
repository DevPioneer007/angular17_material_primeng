import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';
import { DashboardRecordComponent } from '../../dashboard/record/dashboard-record.component';

@Component({
  selector: 'app-request-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ProgressBarModule,
    RouterLink,
    DashboardRecordComponent
  ],
  templateUrl: 'request-dashboard.component.html'
})
export class RequestDashbordComponent implements OnInit {

  records = new Array(3);

  constructor() { }

  ngOnInit(): void {

  }

}
