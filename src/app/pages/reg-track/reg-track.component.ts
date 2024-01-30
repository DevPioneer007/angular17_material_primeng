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
  selector: 'app-reg-track',
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
  templateUrl: './reg-track.component.html',
})
export class RegTrackComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private locationDataService: LocationDataService,
    private companyDataService: CompanyDataService,
    private sidebarToggleService: SidebarToggleService
  ) { }

  locations: ILocation[] = [];
  allCompanies: any;
  allFeaturedCompanies: any;
  properCompanies: any;
  companyDataParams: FeaturedDetail = {};
  videoLink = '../../../assets/video/driller-bg.mp4';

  locationAPIUrl = environment.apiBaseUrl + '/api/services/app/HydronetLocalGovernment/GetAll';

  ngOnInit() {

    const url = this.router.url;
    this.videoLink = this.router.url.includes('package-water') ? '../../../assets/video/water-package.mp4' : '../../../assets/video/driller-bg.mp4';

    this.locationDataService.fetchData(this.locationAPIUrl).subscribe(fetchedData => {
      this.locations = fetchedData.result.items;
    });

    this.companyDataService.fetchFeaturedAllData().subscribe(fetchedData => {
      this.allFeaturedCompanies = fetchedData.result.drillerFeaturedProfile;
    });
  }

}
