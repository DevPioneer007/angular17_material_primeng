import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { SidebarToggleService } from '../../services/sidebar-toggle.service';

@Component({
  selector: 'landing-sidebar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, DialogModule],
  templateUrl: './sidebar.component.html',
})
export class LandingSidebarComponent {
  sidebar = [
    {
      title: 'Drillers',
      link: '/driller',
      icon: '../../../assets/icons/driller.svg',
      popupTitle: 'LASWARCO Borehole Drillers Interactive Panel',
      description: 'All You Need on the Go to Search or validate a Drillers profile, register or apply for your License as certified drillers in Lagos State.',
      submenus: [
        { title: 'Driller Search & Validation', link: '/driller/search' },
        { title: 'Driller Registration', link: '/driller/registration' },
        { title: 'Driller License & Renewal', link: '/driller/renew' },
        { title: 'Complain & Report', link: '/driller/registration' },
      ],
    },
    {
      title: 'Package Water Providers',
      link: '/package-water',
      icon: '../../../assets/icons/package.svg',
      popupTitle: 'LASWARCO Portable Water Providers Interactive Panel',
      description:
        'All You Need on the Go to Search or validate a Drillers profile, register or apply for your License as certified drillers in Lagos State.',
      submenus: [
        {
          title: 'Service Provider Search & Validation',
          link: '/package-water/search',
        },
        {
          title: 'Service Provider Registration',
          link: '/package-water/registration',
        },
        {
          title: 'Service Provider License & Renewal',
          link: '/package-water/renew',
        },
        { title: 'Complain & Report', link: '/package-water/registration' },
      ],
    },
    {
      title: 'Water Tanker Supplier',
      link: '/water-tanker',
      icon: '../../../assets/icons/tanker.svg',
      popupTitle: 'LASWARCO Water Tanker Supplier Interactive Panel',
      description:
        'All You Need on the Go to Search or validate a Water Tanker Service provider’s  profile, Order Water Supply directly, register or apply for your License as a certified Water Supplier  in Lagos State.',
      submenus: [
        { title: 'Search & Order Water Supply', link: '/water-tanker/search' },
        {
          title: 'Water Tanker Registration',
          link: '/water-tanker/registration',
        },
        { title: 'Water Tanker Permit & Renewal', link: '/water-tanker/renew' },
        { title: 'Complain & Report', link: '/water-tanker/registration' },
      ],
    },
    {
      title: 'Water & Soil Analysis',
      link: '/water-soil',
      icon: '../../../assets/icons/soil-analysis.svg',
    },
    // { title: 'Request Water Test/Analysis', link: 'request-water' },
  ];

  public href: string = '';
  showSidebar$ = this.sidebarToggleService.showSidebar$;
  isHovering: boolean = false;
  isDisplayPopup: boolean = false;
  selectedService: {
    title: string | undefined;
    desc: string | undefined;
    submenus: any;
  } = {
    title: this.sidebar[0].popupTitle,
    desc: this.sidebar[0].description,
    submenus: this.sidebar[0].submenus,
  };

  constructor(
    private router: Router,
    private sidebarToggleService: SidebarToggleService,
    private location: Location
  ) {}

  showPopup(id: number) {
    console.log('clicked item id: ', id);
    this.router.navigate([this.sidebar[id].link]);
    if (id != 3) {
      this.selectedService = {
        title: this.sidebar[id].popupTitle,
        desc: this.sidebar[id].description,
        submenus: this.sidebar[id].submenus,
      };
      console.log('current content: ', this.selectedService);
      this.isDisplayPopup = true;
    } else {
      this.router.navigate(['/water-soil']);
    }
  }

  toBaseLink(id: number) {
    this.router.navigate([this.sidebar[id].link]);
  }

  hideDialog() {
    this.isDisplayPopup = false;
    this.location.back();
  }

  goTo(link: string) {
    this.isDisplayPopup = false;
    this.router.navigate([link]);
  }

  hide() {
    setTimeout(() => {
      this.isHovering = false;
    }, 5000);
    console.log('hide modal')
  }

  onHide() {}
  ngOnInit() {
    this.href = this.router.url;
    for (let i = 0; i < 4; i++) {
      if (this.href == this.sidebar[i].link) {
        this.isDisplayPopup = true;
        this.selectedService = {
          title: this.sidebar[i].popupTitle,
          desc: this.sidebar[i].description,
          submenus: this.sidebar[i].submenus,
        };
      }
    }
    this.showSidebar$ = this.sidebarToggleService.showSidebar$;
  }
}
