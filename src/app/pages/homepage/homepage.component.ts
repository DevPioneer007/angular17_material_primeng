import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainContentComponent } from '../../components/homepage/main-content/main-content.component';
import { HomeSliderComponent } from '../../components/homepage/slider/slider.component';
import { LandingToolbarComponent } from '../../components/landing-toolbar/landing-toolbar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    HomeSliderComponent,
    LandingToolbarComponent,
    MainContentComponent,
  ],
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {
  service: string = 'Driller';

  constructor(private router: Router) {}

  navigateTo(subUrl: string) {
    let currentUrl = this.router.url;
    let newUrl = currentUrl + '/' + subUrl;
    this.router.navigate([newUrl]);
  }

  ngOnInit(): void {}
}
