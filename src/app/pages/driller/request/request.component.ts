import { Component, OnInit } from '@angular/core';
import { LandingSidebarComponent } from '../../../components/landing-sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LogobarComponent } from '../../../components/logobar/logobar.component';
import { DashSidebarComponent } from '../../../components/dashboard/sidebar/sidebar.component';
import { NewSidebarComponent } from '../../../components/new-sidebar/new-sidebar.component';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [
    LogobarComponent,
    LandingSidebarComponent,
    NewSidebarComponent,
    CommonModule,
    RouterLink,
    RouterOutlet,
    DashSidebarComponent
  ],
  templateUrl: './request.component.html',
})
export class RequestComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {
  }
}
