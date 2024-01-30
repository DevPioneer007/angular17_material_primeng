import { Component, OnInit } from '@angular/core';
import { LandingNavbarComponent } from '../../../components/landing-navbar/navbar.component';
import { LandingSidebarComponent } from '../../../components/landing-sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewSidebarComponent } from '../../../components/new-sidebar/new-sidebar.component';

@Component({
  selector: 'app-driller-registration',
  standalone: true,
  imports: [
    LandingNavbarComponent,
    LandingSidebarComponent,
    NewSidebarComponent,
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './driller-registration.component.html',
})
export class DrillerRegistrationComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {
  }
}
