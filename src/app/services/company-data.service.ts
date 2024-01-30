import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyDataService {

  private properData: any;
  private allFeaturedData: any;
  private allData: any;
  private sharedProfileData = new BehaviorSubject<any>({});

  curProfileData: Observable<any> = this.sharedProfileData.asObservable();

  constructor(private http: HttpClient) { }

  featuredAPIUrl = environment.apiBaseUrl + '/api/services/app/HydronetDriller/GetDrillerFeaturedProfileDetail';
  fullAPIUrl = environment.apiBaseUrl + '/api/services/app/HydronetDriller/GetDrillerProfileFullDetail';

  fetchFeaturedData(locationId: any | null, uidn: any, businessName: any | null) {
    if (this.properData) {
      return of(this.properData);
    }

    // If data does not exist, fetch it, store it, then return it.
    let params = new HttpParams();
    if(locationId) {
      params = params.append('HydronetStateId', locationId);
    }
    
    if(uidn) {
      params = params.append('UIDN', uidn);
    }
    if(businessName) {
      params = params.append('DrillerCompanyName', businessName);
    }

    return this.http.get(this.fullAPIUrl, { params }).pipe(
      tap(fetchedData => {
        this.properData = fetchedData;
      })
    );
  }

  fetchFeaturedAllData() {
    if (this.allFeaturedData) {
      return of(this.allFeaturedData);
    }

    // If data does not exist, fetch it, store it, then return it.
    return this.http.get(this.featuredAPIUrl).pipe(
      tap(fetchedData => {
        this.allFeaturedData = fetchedData;
      })
    );
  }

  fetchAllData() {
    if (this.allData) {
      return of(this.allData);
    }

    // If data does not exist, fetch it, store it, then return it.
    return this.http.get(this.fullAPIUrl).pipe(
      tap(fetchedData => {
        this.allData = fetchedData;
        localStorage.setItem("allProfileData", JSON.stringify(this.allData.result.drillerProfileFullDetail));
      })
    );
  }

  setCurData(companyDetail: any) {
    this.sharedProfileData = companyDetail;
    localStorage.setItem("curProfileData", JSON.stringify(this.sharedProfileData));
  }

  getCurData() {
    return this.curProfileData;
  }
}
