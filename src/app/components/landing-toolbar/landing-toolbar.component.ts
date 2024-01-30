import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-landing-toolbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './landing-toolbar.component.html',
  styleUrl: './landing-toolbar.component.css',
})
export class LandingToolbarComponent {
  tools = [
    { title: 'Permits', icon: 'permits.svg' },
    { title: 'License', icon: 'license.svg' },
    { title: 'Programs', icon: 'programs.svg' },
    { title: 'Drinking Water', icon: 'drinking.svg' },
    { title: 'Water Quality', icon: 'water.svg' },
    { title: 'Search', icon: 'search.svg' },
    { title: 'Water Rights', icon: 'rights.svg' },
    { title: 'Notices', icon: 'notices.svg' },
    { title: 'Web Tool', icon: 'web.svg' },
    { title: 'Web Tool', icon: 'web2.svg' },
  ];
}
