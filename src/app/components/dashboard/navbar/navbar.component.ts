import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'dashboard-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterOutlet,
  ],
})
export class DashNavbarComponent {
  links = [
    {
      title: 'Alle Produkter',
      icon: 'downArrow.svg',
    },
    {
      title: 'Kampagner',
      icon: 'tag.svg',
    },
    {
      title: 'Gaming',
      icon: 'mission.svg',
    },
    {
      title: 'Bærbar',
      icon: 'staff.svg',
    },
    {
      title: 'Skærme',
      icon: 'report.svg',
    },
    {
      title: 'Smartphones',
      icon: 'contact.svg',
    },
  ];
}
