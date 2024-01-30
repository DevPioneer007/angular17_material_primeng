import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { LandingNavbarComponent } from '../../components/landing-navbar/navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LandingSidebarComponent } from '../../components/landing-sidebar/sidebar.component';
import { PrefferedSponsoredChoiceComponent } from '../../components/preffered-sponsored-choice/preffered-sponsored-choice.component';
import { FooterComponent } from '../../components/landing-footer/landing-footer.component';
import { ILocation } from '../../types/location';
import { environment } from '../../../environments/environment';
import { LocationDataService } from '../../services/location-data.service';
import { SidebarToggleService } from '../../services/sidebar-toggle.service';
import { CompanyDataService } from '../../services/company-data.service';
import { FeaturedDetail } from '../../interfaces/featured-detail';
import { FormsModule } from '@angular/forms';
import { FeaturedBoxComponent } from '../../components/featured-box/featured-box.component';

@Component({
  selector: 'app-validate-driller',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterLink,
    LandingNavbarComponent,
    LandingSidebarComponent,
    FeaturedBoxComponent,
    MatSelectModule,
    PrefferedSponsoredChoiceComponent,
    MatFormFieldModule,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './validate-driller.component.html',
})
export class ValidateDrillerComponent implements OnInit {

  constructor(
    // private http: HttpClient, 
    private router: Router,
    private route: ActivatedRoute,
    private locationDataService: LocationDataService,
    private companyDataService: CompanyDataService,
    private sidebarToggleService: SidebarToggleService
  ) { }

  curService: string = 'driller';
  services = ['driller', 'package-water', 'water-tanker', 'water-soil']
  locations: ILocation[] = [];
  allCompanies: any;
  allFeaturedCompanies: any;
  properCompanies: any;
  companyDataParams: FeaturedDetail = {};
  videoLink = '../../../assets/video/driller-bg.mp4';


  uidn?: any;
  businessName?: any;
  curLocation?: any;

  locationAPIUrl = environment.apiBaseUrl + '/api/services/app/HydronetLocalGovernment/GetAll';

  ngOnInit() {

    const url = this.router.url;
    const foundService = this.services.find(service => url.includes(service));
    if (foundService) {
      this.curService = foundService;
      this.videoLink = this.curService == 'package-water' ? '../../../assets/video/water-package.mp4' : '../../../assets/video/driller-bg.mp4';
    }

    this.locationDataService.fetchData(this.locationAPIUrl).subscribe(fetchedData => {
      this.locations = fetchedData.result.items;
    });

    this.companyDataService.fetchFeaturedAllData().subscribe(fetchedData => {
      this.allFeaturedCompanies = fetchedData.result.drillerFeaturedProfile;
    });
  }

  toSearch() {
    this.companyDataService.fetchAllData().subscribe(fetchedData => {
      this.allCompanies = fetchedData.result.items;
    });

    this.companyDataService.fetchFeaturedAllData().subscribe(fetchedData => {
      this.allFeaturedCompanies = fetchedData.result.items;
    });

    this.companyDataService.fetchFeaturedData(this.curLocation, this.uidn, this.businessName).subscribe(fetchedData => {
      this.properCompanies = fetchedData.result.items;
    });

    const curPath = '/' + this.curService + '/search-result';
    if (this.selectedType == 0) {
      this.router.navigate([curPath], { queryParams: { location: this.curLocation, businessName: this.businessName } });
    } else {
      this.router.navigate([curPath], { queryParams: { location: this.curLocation, uidn: this.uidn } });
    }
  }

  changeUIDN(uidn: string) {
    this.uidn = uidn;
  }

  changeBusinessName(businessName: string) {
    this.businessName = businessName;
  }

  changeLocation(location: string) {
    this.curLocation = location;
  }

  drill_types = ["Driller'S Business Name", "LASWARCO UDID"];
  selectedType: number = 0;

  selectTab(index: number) {
    this.selectedType = index;
  }

  prefferedSponsoredChoice = [
    {
      image: '../../../assets/images/licenseImage.png',
      title: 'Hyrdo Engineering Service Limited ',
      subTitle: 'a31 Obafemi Awolowo way Off Allen Round About Ikeja, Lagos.',
      tags: ['Water Analysis Compiler', 'Highly Recommended', 'LSWRC Prefered'],
      otherTags: [
        {
          image: '../../../assets/images/otherTab1.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab2.png',
          title: 'Soil  ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab3.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab4.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
      ],
      body: "Curating and advising outstanding impact projects is our bread and butter- and it's also a lot of work 😅. Every listing on this site is copy written, edited, and curated by our internal team. We also produce and edit most project videos for our small",
    },
    {
      image: '../../../assets/images/licenseImage.png',
      title: 'Hydro Engineering Service Limited',
      subTitle: 'a31 Obafemi Awolowo way Off Allen Round About Ikeja, Lagos.',
      tags: ['Water Analysis Compiler', 'Highly Recommended', 'LSWRC Prefered'],
      otherTags: [
        {
          image: '../../../assets/images/otherTab1.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab2.png',
          title: 'Soil  ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab3.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab4.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
      ],
      body: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eli.',
    },
    {
      image: '../../../assets/images/licenseImage.png',
      title: 'Hydro Engineering Service Limited',
      subTitle: 'a31 Obafemi Awolowo way Off Allen Round About Ikeja, Lagos.',
      tags: ['Water Analysis Compiler', 'Highly Recommended', 'LSWRC Prefered'],
      otherTags: [
        {
          image: '../../../assets/images/otherTab1.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab2.png',
          title: 'Soil  ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab3.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
        {
          image: '../../../assets/images/otherTab4.png',
          title: 'WELL WATER ANALYSIS',
          number: 3,
        },
      ],
      body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eliLorem ipsum dolor sit amet, consectetur adipiscing eli.',
    },
  ];

}
