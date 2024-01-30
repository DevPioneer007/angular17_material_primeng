import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'home-navbar',
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
export class HomeNavbarComponent {
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
      title: 'Executive Secretary',
      icon: 'mission.svg',
    },
    {
      title: 'Staffs',
      icon: 'staff.svg',
    },
    {
      title: 'Operators',
      icon: 'report.svg',
      items: [
        {
          title: 'Drillers',
        },
        {
          title: 'Package Water',
        },
        {
          title: 'Water Tanker',
        },
        {
          title: 'Analysis',
        },
      ],
    },
    {
      title: 'Contact Us',
      icon: 'contact.svg',
    },
    {
      title: 'Subscribe',
      icon: 'contact.svg',
    },
    {
      title: 'Settings',
      icon: 'contact.svg',
    },
  ];

  selectedPage: number = 0;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (typeof localStorage != 'undefined') {
      this.selectedPage = Number(localStorage.getItem('selectedPage')) || 0
    }
  }

  genLink(link: string): string {
    return link.toLowerCase().replace(/ /g, '_');
  }

  setSelectedPage(i: number) {
    if (typeof localStorage != 'undefined') {
      localStorage.setItem('selectedPage', i.toString());
    }
    this.selectedPage = i;
  }
}
