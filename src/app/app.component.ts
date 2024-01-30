import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingNavbarComponent } from './components/landing-navbar/navbar.component';
import { LandingSidebarComponent } from './components/landing-sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LandingNavbarComponent,
    LandingSidebarComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Hydronet';
}
