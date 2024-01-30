import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-driller-registration-payment',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './payment.component.html',
})
export class DrillerRegistrationPaymentComponent implements OnInit {

  constructor( ) { }
  ngOnInit(): void {
  }
}
