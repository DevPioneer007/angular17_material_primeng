import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MatTabsModule, MatGridListModule, MatCardModule, CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {
  tabs = [
    {
      tabName: 'Core Mandate',
      content: 'Core Mandate',
      tabClass: 'font-bold text-2xl text-white rounded-t-[10px] bg-primary-2',
      bgColor: 2,
    },
    {
      tabName: 'Mission',
      content: 'Mission',
      tabClass: 'font-bold text-2xl text-white rounded-t-[10px] bg-primary-6',
      bgColor: 6,
    },
    {
      tabName: 'Vision',
      content: 'Vision',
      tabClass: 'font-bold text-2xl text-white rounded-t-[10px] bg-primary-7',
      bgColor: 7,
    },
    {
      tabName: 'Stack Holders',
      content: 'Stack Holders',
      tabClass: 'font-bold text-2xl text-white rounded-t-[10px] bg-primary-3',
      bgColor: 3,
    },
  ];

  counter(n: number): number[] {
    return Array(n);
  }
}
