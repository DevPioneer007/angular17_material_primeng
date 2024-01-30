import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-verify-content',
  standalone: true,
  imports: [CommonModule, ProgressBarModule, RouterLink],
  templateUrl: 'verify-content.component.html'
})
export class VerifyContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
