import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LogobarComponent } from '../../logobar/logobar.component';
import { NewSidebarComponent } from '../../new-sidebar/new-sidebar.component';

@Component({
  selector: 'app-driller-registration-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    LogobarComponent,
    NewSidebarComponent
  ],
  templateUrl: './profile.component.html',
})
export class DrillerRegistrationProfileComponent implements OnInit {

  constructor( ) { }
  ngOnInit(): void {
  }
}
