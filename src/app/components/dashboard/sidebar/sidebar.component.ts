import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'dash-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatCheckboxModule,
  ],
  templateUrl: './sidebar.component.html',
})
export class DashSidebarComponent {
  controls = [
    {
      title: 'Permit & License',
      checks: [
        'Driller Permit',
        'Borehole Drill Permit',
        'Microsoft',
        'MSI',
        'Lenovo',
      ],
    },
    {
      title: 'Processor',
      checks: ['Intel', 'AMD'],
    },
    {
      title: 'Harddisk Type',
      checks: ['SSD', 'HDD'],
    },
    {
      title: 'Harddisk Størrelse',
      checks: ['500 GB', '1 TB', '2 TB'],
    },
  ];
}
