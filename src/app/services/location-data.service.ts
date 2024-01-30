import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  private data: any;

  constructor(private http: HttpClient) { }

  fetchData(url: string): Observable<any> {
    // If data exists, return it.
    if (this.data) {
      return of(this.data);
    }

    // If data does not exist, fetch it, store it, then return it.
    return this.http.get(url).pipe(
      tap(fetchedData => {
        this.data = fetchedData;
      })
    );
  }
}
