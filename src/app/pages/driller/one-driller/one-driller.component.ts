import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { OneDrillerBriefComponent } from '../../../components/one-driller-brief/one-driller-brief.component';
import { OneDrillerTrackRecordsComponent } from '../../../components/one-driller-track-records/one-driller-track-records.component';
import { OneDrillerAboutComponent } from '../../../components/one-driller-about/one-driller-about.component';
import { OneDrillerContactComponent } from '../../../components/one-driller-contact/one-driller-contact.component';
import { LogobarComponent } from '../../../components/logobar/logobar.component';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LandingSidebarComponent } from '../../../components/landing-sidebar/sidebar.component';
import { ProfileDataService } from '../../../services/profile-data.service';
import { MatSelectModule } from '@angular/material/select';
import { OneDrillerEquipmentComponent } from '../../../components/one-driller-equipment/one-driller-equipment.component';

@Component({
  selector: 'app-one-driller',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    LogobarComponent,
    LandingSidebarComponent,
    OneDrillerBriefComponent,
    OneDrillerTrackRecordsComponent,
    OneDrillerEquipmentComponent,
    OneDrillerAboutComponent,
    OneDrillerContactComponent,
    MatSelectModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: "one-driller.component.html",
})
export class OneDrillerComponent implements OnInit {

  businessDetail: any;
  id: any;
  ratings = new Array(5);
  curUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private profileDataService: ProfileDataService
  ) { }

  url = environment.apiBaseUrl + '/api/services/app/HydronetDriller/GetDrillerProfileFullDetail';

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.curUrl = this.router.url;
    if (this.router.url.includes('contact')) {
      this.activeTab = 3;
    } else if (this.router.url.includes('detail')) {
      this.activeTab = 0
    }
    let params = new HttpParams().set('HydronetDrillerId', this.id);
    this.profileDataService.fetchData(this.url, params).subscribe(fetchedData => {
      this.businessDetail = fetchedData.result.drillerProfileFullDetail[0];
    });

    // this.businessDetail = getDrillerProfileFullDetail(this.http, this.url, id);
  }

  activeTab = 0;
  changeActive(tab: number) {
    this.activeTab = tab;
    console.log("cur url: ", this.router.url)
    switch (this.activeTab) {
      case 0:
        this.router.navigate(['detail'], {relativeTo: this.route});
        break;
      case 1:
        this.router.navigate(['record'], {relativeTo: this.route});
        break;
      case 2:
        this.router.navigate(['equip'], {relativeTo: this.route});
        break;
      case 3:
        this.router.navigate(['contact'], {relativeTo: this.route});
        break;
      case 4:
        this.router.navigate(['about'], {relativeTo: this.route});
        break;
      default:
        this.router.navigate(['detail'], {relativeTo: this.route});
        break;
    }
  }
}
