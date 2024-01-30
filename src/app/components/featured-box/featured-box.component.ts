import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrillerLicenseProps } from '../../interfaces/driller-license-props';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-featured-box',
  standalone: true,
  imports: [CommonModule, RouterLink, CarouselModule],
  templateUrl: "./featured-box.component.html"
})
export class FeaturedBoxComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyDataService: CompanyDataService
  ) { }
  // @Input() oneChoice!: DrillerLicenseProps;
  @Input() companyList!: DrillerLicenseProps[];
  showLongTextFlags: Record<string, boolean> = {};
  responsiveOptions = [
    {
      breakpoint: '1440px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  toBrief(curData: any) {
    this.companyDataService.setCurData(curData);
    this.router.navigate(['../service', curData.id], {relativeTo: this.route});
  }

  ngOnInit(): void {
  }
}
