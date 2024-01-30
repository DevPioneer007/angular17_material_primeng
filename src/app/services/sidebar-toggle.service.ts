import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {

  public showSidebar = new BehaviorSubject<boolean>(true);

  showSidebar$ = this.showSidebar.asObservable();

  constructor() { }

  show(): void {
    this.showSidebar.next(true);
  }

  hide(): void {
    this.showSidebar.next(false);
  }
}
