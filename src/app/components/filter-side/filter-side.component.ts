import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-filter-side',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatCheckboxModule,
  ],
  templateUrl: './filter-side.component.html',
})
export class FilterSideComponent implements OnInit {

  items!: any;

  constructor() { }

  toggleCollapse(item: any) {
    item.collapsed = !item.collapsed;

  }

  toggleCheckbox(item: any) {
    item.checked = !item.checked
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Permit & License',
        collapsible: true,
        collapsed: false,
        items: [
          {
            label: 'Driller Permit',
            checkbox: true,
            checked: false
          },
          {
            label: 'Borehole Drill Permit',
            checkbox: true,
            checked: false
          },
          {
            label: 'Microsoft',
            checkbox: true,
            checked: false
          },
          {
            label: 'MSI',
            checkbox: true,
            checked: false
          },
          {
            label: 'Lenovo',
            checkbox: true,
            checked: false
          },
          {
            label: 'Vis Alle',
            checkbox: false
          },
        ]
      },
      {
        label: 'Processor',
        collapsible: true,
        collapsed: true,
        items: [
          {
            label: 'Driller Permit',
            checkbox: true,
            checked: false
          },
          {
            label: 'Borehole Drill Permit',
            checkbox: true,
            checked: false
          },
          {
            label: 'Microsoft',
            checkbox: true,
            checked: false
          },
          {
            label: 'MSI',
            checkbox: true,
            checked: false
          },
          {
            label: 'Lenovo',
            checkbox: true,
            checked: false
          },
          {
            label: 'Vis Alle',
            checkbox: false
          },
        ]
      },
      {
        label: 'Harddisk Type',
        collapsible: true,
        collapsed: false,
        items: [
          {
            label: 'Driller Permit',
            checkbox: true,
            checked: false
          },
          {
            label: 'Borehole Drill Permit',
            checkbox: true,
            checked: false
          },
          {
            label: 'Microsoft',
            checkbox: true,
            checked: false
          },
          {
            label: 'MSI',
            checkbox: true,
            checked: false
          },
          {
            label: 'Lenovo',
            checkbox: true,
            checked: false
          },
          {
            label: 'Vis Alle',
            checkbox: false
          },
        ]
      },
    ];
  }
}
