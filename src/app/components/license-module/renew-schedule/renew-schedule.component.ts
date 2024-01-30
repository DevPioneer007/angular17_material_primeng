import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgCircleProgressModule } from 'ng-circle-progress';

@Component({
  selector: 'app-renew-schedule',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    NgCircleProgressModule,
  ],
  templateUrl: './renew-schedule.component.html',
})
export class RenewScheduleComponent implements OnInit {

  ratings = new Array(5);
  items!: any;

  constructor( ) { }
  ngOnInit(): void {
    // this.sidebarToggleService.hide();
  }
}
