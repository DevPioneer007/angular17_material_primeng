import { Component, Input } from '@angular/core';
import { Reveiw } from '../../interfaces/reveiw';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="my-2 mx-1">
      <div class="flex gap-2 items-center mb-2">
        <img [src]="reveiw.image" [alt]="reveiw.name" />
        <div>
          <p class="text-[#121212] font-semibold mb-1">{{ reveiw.name }}</p>
          <div class="flex gap-1 items-center flex-row ">
            <div
              *ngFor="let star of [].constructor(reveiw.rating); let i = index"
            >
              <img src="../../../assets/images/star.png" alt="star" class="w-5 h-5 p-[2px] rounded-full bg-[#0CB9DE]" />
            </div>
          </div>
        </div>
      </div>
      <p class="text-xs text-[#121212]">{{ reveiw.body }}</p>
      <div *ngIf="!isLastIndex" class="border-b border-b-[#0CB9DE] my-3"></div>
    </div>
  `,
})
export class ReviewComponent {
  @Input() reveiw!: Reveiw;
  @Input() isLastIndex: boolean = false;
}
