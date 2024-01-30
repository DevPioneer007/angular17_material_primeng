import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPathService {

  private url: string = '';

  setUrl(url: string) {
    this.url = url;
  }

  getUrl() {
    return this.url;
  }
}
