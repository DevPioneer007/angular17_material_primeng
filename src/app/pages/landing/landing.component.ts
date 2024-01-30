import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { LandingNavbarComponent } from '../../components/landing-navbar/navbar.component';
import { LandingSidebarComponent } from '../../components/landing-sidebar/sidebar.component';

@Component({
  selector: 'app-landing',
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
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {

  service: string = "Driller"
  videoLink = '../../../assets/video/driller-bg.mp4';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  navigateTo(subUrl: string) {
    let currentUrl = this.router.url;

    // Split by '/' to get individual segments
    let urlSegments = currentUrl.split('/');

    // Construct new URL
    // let newUrl = [...urlSegments, subUrl];
    let newUrl = currentUrl + '/' + subUrl;
    console.log("new url = ", currentUrl, newUrl)
    // Navigate
    this.router.navigate([newUrl]);
  }

  ngOnInit(): void {
    this.videoLink = this.router.url.includes('package-water') ? '../../../assets/video/water-package.mp4' : '../../../assets/video/driller-bg.mp4';
  }
}
