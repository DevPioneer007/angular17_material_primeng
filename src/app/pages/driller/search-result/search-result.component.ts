import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { DrillerLicenseListComponent } from '../../../components/driller-license-list/driller-license-list.component';
import { DrillerLicenseComponent } from '../../../components/driller-license/driller-license.component';
import { FeaturedBoxComponent } from '../../../components/featured-box/featured-box.component';
import { LandingNavbarComponent } from '../../../components/landing-navbar/navbar.component';
import { LandingSidebarComponent } from '../../../components/landing-sidebar/sidebar.component';
import { LogobarComponent } from '../../../components/logobar/logobar.component';
import { Company } from '../../../interfaces/company';
import { CompanyDataService } from '../../../services/company-data.service';
import { LocationDataService } from '../../../services/location-data.service';
import { SidebarToggleService } from '../../../services/sidebar-toggle.service';
import { ILocation } from '../../../types/location';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    HttpClientModule,
    LandingNavbarComponent,
    LandingSidebarComponent,
    LogobarComponent,
    FeaturedBoxComponent,
    DrillerLicenseComponent,
    DrillerLicenseListComponent,
    CommonModule,
    RouterLink,
    MatIconModule,
    MatStepperModule,
    MatSelectModule
  ],
  templateUrl: './search-result.component.html',
})

export class SearchResultComponent implements OnInit {

  public displayWay: 'list' | 'grid' = 'list';

  allCompanies: any = [{}];
  properCompanies: any = [];
  allFeaturedCompanies: any = [];
  uidn: any;
  businessName: any;
  locationId: any;
  isPreferred: any = false;
  locations: ILocation[] = [];

  filter_types = ['Any', 'isPreferred']

  constructor(
    private route: ActivatedRoute,
    private locationDataService: LocationDataService,
    private companyDataService: CompanyDataService,
    private sidebarToggleService: SidebarToggleService
  ) { }

  changeDisplayWay(way: 'list' | 'grid') {
    this.displayWay = way;
  }

  setFilterOption(isPreferredOption: any) {
    this.isPreferred = isPreferredOption === 'isPreferred' ? true : false;
  }

  changeLocation(selectedId: any) {
    this.locationId = selectedId;
    let curLocation = this.locations.filter(location => location.id == selectedId)[0];
    if (this.isPreferred) {
      let allData = localStorage.getItem('allProfileData');
      if (allData) {
        this.allCompanies = JSON.parse(allData);
      }
      let filteredData = this.allCompanies.filter((company: Company) => company.hydronetStateId == curLocation.hydronetStateId);
      this.properCompanies = filteredData;
    } else {
      this.companyDataService.fetchFeaturedData(curLocation.hydronetStateId, this.uidn, this.businessName).subscribe(fetchedData => {
        this.properCompanies = fetchedData.result.drillerProfileFullDetail;
      });
    }
  }

  ngOnInit() {
    let apiUrl = environment.apiBaseUrl + '/api/services/app/HydronetLocalGovernment/GetAll';
    this.locationDataService.fetchData(apiUrl).subscribe(fetchedData => {
      this.locations = fetchedData.result.items;
    });

    this.companyDataService.fetchFeaturedAllData().subscribe(fetchedData => {
      this.allFeaturedCompanies = fetchedData.result.drillerFeaturedProfile;
    });

    this.route.queryParamMap.subscribe(params => {
      this.uidn = params.get('uidn');
      this.businessName = params.get('businessName');
      this.locationId = params.get('location');
    });

    if (this.locationId || this.uidn || this.businessName) {
      this.companyDataService.fetchFeaturedData(this.locationId, this.uidn, this.businessName).subscribe(fetchedData => {
        this.properCompanies = fetchedData.result.drillerProfileFullDetail;
      });
    } else {

      this.companyDataService.fetchAllData().subscribe(fetchedData => {
        this.properCompanies = fetchedData.result.drillerProfileFullDetail;
      });
    }
  }
}
