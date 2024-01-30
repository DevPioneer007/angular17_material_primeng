import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-one-driller-track-records',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatTabsModule],
  templateUrl: "one-driller-track-records.component.html"
})
export class OneDrillerTrackRecordsComponent { }
