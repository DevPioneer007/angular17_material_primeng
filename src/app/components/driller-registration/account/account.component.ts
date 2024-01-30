import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-driller-registration-account',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './account.component.html',
})
export class DrillerRegistrationAccountComponent implements OnInit {

  constructor( ) { }
  ngOnInit(): void {
  }
}
