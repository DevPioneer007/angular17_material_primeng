import { ApiResponse } from "../interfaces/apiResponse";
import { ILocation } from "../types/location";
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

export function getLocationList(http: HttpClient, apiUrl: string) {
	let locations: ILocation[] = [];
	http.get<ApiResponse>(apiUrl).subscribe(data => {
		locations = data.result.items;
	}
	);
	return locations;
}

export interface DrillerProfileFullDetail {
	id: number;
	hydronetDrillerBusiness: [];
	drillerCompanyName: string;
	companyAddress: string;
	coverImage: string;
	companyLogo: string;
}

export interface DrillerDetail {
	drillerProfileFullDetail: DrillerProfileFullDetail[];
}

export interface ProfileResult {
	result: DrillerDetail;
}

export function getDrillerProfileFullDetail(http: HttpClient, apiUrl: string, id: any) {
	let profileData: DrillerProfileFullDetail[] = [];
	let params = new HttpParams().set('HydronetDrillerId', id);
	http.get<ProfileResult>(apiUrl, {params}).subscribe(response => {
		profileData = response.result.drillerProfileFullDetail;
	}
	);
	return profileData[0];
}