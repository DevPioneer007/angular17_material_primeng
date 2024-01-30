import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatCheckboxModule,
    RouterLink
  ],
  templateUrl: './new-sidebar.component.html',
})
export class NewSidebarComponent implements OnInit {

  items = [
    {
      label: 'Home Page',
      collapsible: false,
      collapsed: true,
      icon: 'pi pi-book',
      link: '/',
      items: []
    },
    {
      label: 'Search',
      collapsible: false,
      collapsed: true,
      icon: 'pi pi-book',
      link: '/driller/search-result',
      items: []
    },
    {
      label: 'Registration',
      collapsible: true,
      collapsed: true,
      icon: 'pi pi-book',
      items: [
        {
          label: 'Company Profile',
          checkbox: true,
          link: '/driller/registration/profile',
          checked: false
        },
        {
          label: 'Drill Permit & Certificates',
          checkbox: true,
          link: '/driller/registration/permit',
          checked: false
        },
        {
          label: 'User Accounts',
          checkbox: true,
          link: '/driller/registration/account',
          checked: false
        },
        {
          label: 'Payment',
          checkbox: true,
          link: '/driller/registration/payment',
          checked: false
        },
      ]
    },
    {
      label: 'Permit',
      collapsible: false,
      collapsed: true,
      icon: 'pi pi-book',
      link: '/',
      items: []
    },
    {
      label: 'Analysis',
      collapsible: false,
      collapsed: true,
      icon: 'pi pi-calendar',
      link: '/',
      items: []
    },
  ];
  others = [
    {
      label: 'Notification',
      collapsible: false,
      collapsed: true,
      icon: 'pi pi-bell',
      link: '/',
      items: []
    },
    {
      label: 'Settings',
      collapsible: true,
      collapsed: true,
      icon: 'pi pi-cog',
      items: [
        {
          label: 'Company Profile',
          checkbox: true,
          link: '/',
          checked: false
        },
        {
          label: 'Drill Permit & Certificates',
          checkbox: true,
          link: '/',
          checked: false
        },
        {
          label: 'User Accounts',
          checkbox: true,
          link: '/',
          checked: false
        },
        {
          label: 'Payment',
          checkbox: true,
          link: '/',
          checked: false
        },
      ]
    },
  ];

  registMode: boolean = true;
  darkMode: boolean = false;

  constructor(private router: Router) { }

  setDarkMode(dark: boolean) {
    this.darkMode = dark;
  }

  setMenuMode(mode: boolean) {
    this.registMode = mode;
  }

  toggleCollapse(item: any) {
    if (item.collapsible) {
      item.collapsed = !item.collapsed;
    } else {
      this.router.navigate([item.link]);
    }
  }

  toggleCheckbox(item: any) {
    item.checked = !item.checked
  }

  ngOnInit(): void {
    
  }
}
