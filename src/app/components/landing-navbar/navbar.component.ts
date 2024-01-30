import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'landing-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
  ],
  templateUrl: './navbar.component.html',
})
export class LandingNavbarComponent {
  links = [
    {
      title: 'Home',
      icon: 'downArrow.svg',
    },
    {
      title: 'About Us',
      icon: 'aboutUs.svg',
    },
    {
      title: 'Mission',
      icon: 'mission.svg',
    },
    {
      title: 'Staffs',
      icon: 'staff.svg',
    },
    {
      title: 'Report',
      icon: 'report.svg',
    },
    {
      title: 'Contact Us',
      icon: 'contact.svg',
    },
  ];

  genLink(link: string): string {
    return '#/home/' + link.toLowerCase().replace(/ /g, '_');
  }
}
