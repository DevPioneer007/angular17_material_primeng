import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-renew-issue',
  standalone: true,
  imports: [CommonModule, ProgressBarModule, RouterLink],
  templateUrl: 'renew-issue.component.html'
})
export class RenewIssueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
