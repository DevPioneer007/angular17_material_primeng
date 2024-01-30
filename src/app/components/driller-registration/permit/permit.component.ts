import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-driller-registration-permit',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './permit.component.html',
})
export class DrillerRegistrationPermitComponent implements OnInit {

  constructor( ) { }
  ngOnInit(): void {
  }
}
