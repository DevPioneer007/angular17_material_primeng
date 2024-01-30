import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import { LandingNavbarComponent } from '../../../components/landing-navbar/navbar.component';
import { LandingSidebarComponent } from '../../../components/landing-sidebar/sidebar.component';

@Component({
  selector: 'app-renew',
  standalone: true,
  imports: [
    LandingNavbarComponent,
    LandingSidebarComponent,
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatIconModule,
    MatStepperModule,
  ],
  templateUrl: './renew-home.component.html',
})
export class RenewHomeComponent implements OnInit {

  videoLink = '../../../assets/video/driller-bg.mp4';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.videoLink = this.router.url.includes('package-water') ? '../../../assets/video/water-package.mp4' : '../../../assets/video/driller-bg.mp4';
  }
}
