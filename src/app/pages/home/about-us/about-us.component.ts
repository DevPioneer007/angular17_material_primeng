import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/landing-footer/landing-footer.component';
import { LandingNavbarComponent } from '../../../components/landing-navbar/navbar.component';
import { LandingSidebarComponent } from '../../../components/landing-sidebar/sidebar.component';
import { HomeNavbarComponent } from '../../../components/homepage/navbar/navbar.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [LandingSidebarComponent, HomeNavbarComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
