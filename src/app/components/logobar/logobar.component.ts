import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logobar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logobar.component.html',
})
export class LogobarComponent {

  navLinks = [
    {
      title: 'Boreholes',
      icon: 'home.svg',
    },
    {
      title: 'Permits Management',
      icon: 'home.svg',
    },
    {
      title: 'Analysis Management',
      icon: 'home.svg',
    }
  ];

}
