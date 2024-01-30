import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeNavbarComponent } from '../../components/homepage/navbar/navbar.component';
import { LandingHomeFooterComponent } from '../../components/landing-home-footer/landing-home-footer.component';
import { LandingSidebarComponent } from '../../components/landing-sidebar/sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeNavbarComponent,
    LandingSidebarComponent,
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatStepperModule,
    LandingHomeFooterComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  service: string = "Driller"

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

  }
}
