import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-driller',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './driller.component.html',
})
export class DrillerComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {
  }
}
