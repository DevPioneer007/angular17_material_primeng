import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  private data: any;

  constructor(private http: HttpClient) { }

  fetchData(url: string, params: HttpParams) {
    if (this.data) {
      return of(this.data);
    }

    // If data does not exist, fetch it, store it, then return it.
    return this.http.get(url, {params}).pipe(
      tap(fetchedData => {
        this.data = fetchedData;
      })
    );
  }
}
