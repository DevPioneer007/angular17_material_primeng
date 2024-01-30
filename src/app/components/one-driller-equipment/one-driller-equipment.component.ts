import { Component } from '@angular/core';
import { Reveiw } from '../../interfaces/reveiw';
import { ReviewComponent } from '../review/review.component';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-one-driller-equipment',
  standalone: true,
  imports: [CommonModule, CheckboxModule],
  templateUrl: 'one-driller-equipment.component.html'
})

export class OneDrillerEquipmentComponent {
  checkboxes = Array(10).fill(false);
 }
