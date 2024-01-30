import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'renew-overview',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './renew-overview.component.html',
})
export class RenewOverviewComponent {
}
