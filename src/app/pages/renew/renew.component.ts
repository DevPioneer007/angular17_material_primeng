import { Component, OnInit } from '@angular/core';
import { LandingNavbarComponent } from '../../components/landing-navbar/navbar.component';
import { LandingSidebarComponent } from '../../components/landing-sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-renew',
  standalone: true,
  imports: [
    LandingNavbarComponent,
    LandingSidebarComponent,
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './renew.component.html',
})
export class RenewComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {
    // this.sidebarToggleService.hide();
  }
}
