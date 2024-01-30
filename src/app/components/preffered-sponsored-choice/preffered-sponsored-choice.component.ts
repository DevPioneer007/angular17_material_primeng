import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-preffered-sponsored-choice',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div
      class="bg-white p-2 shadow-sm border border-[#E6F8FC] rounded-md text-black h-full"
    >
      <div class="flex justify-between gap-5 ">
        <img [src]="oneChoice.image" [alt]="oneChoice.title" class="h-full self-center" />
        <div class="">
          <p class="text-center font-bold text-[#043924] mb-1">
            {{ oneChoice.title }}
          </p>
          <p class="text-center font-bold text-[#39B6CC]  text-xs mb-2">
            {{ oneChoice.subTitle }}
          </p>
          <div class="flex flex-wrap items-center gap-2">
            <p
              class="text-white px-2 bg-[#62CCD3] rounded-md text-[8px] font-normal  p-1"
              *ngFor="let tag of oneChoice.tags"
            >
              {{ tag }}
            </p>
          </div>
          <div class="grid grid-cols-4 gap-3 my-3">
            <div
              class="text-white p-2 bg-[rgba(98,204,211,0.2)]  rounded-md flex items-center flex-col relative"
              *ngFor="let tag of oneChoice.otherTags"
            >
              <div
                class="absolute -top-2 -right-2  px-2 p-1 rounded-full text-sm font-bold bg-[#39B6CC] text-white"
              >
                {{ tag.number }}
              </div>
              <img [src]="tag.image" />
              <p class="text-[#2190A4] font-bold text-[8px] text-center">
                {{ tag.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-2 text-[#525967] text-[11px]">
        <div *ngIf="oneChoice.body.length >= 150; else fullBody">
          <p>{{ oneChoice.body.slice(0, 150) }}</p>
          <a href="" class="text-[#9ABAAD]">more</a>
        </div>
        <ng-template #fullBody>
          <p>{{ oneChoice.body }}</p>
        </ng-template>
      </div>
      <div class="flex gap-2 text-[13px] font-medium">
        <button class=" rounded-md bg-[#39B6CC] text-white px-4 py-1" [routerLink]="['/driller/', oneChoice.id]">
          Contact Driller
        </button>
        <button
          class="border border-[#E7F4F5] rounded-md text-[#39B6CC] px-4 py-1"
        >
          View Mobile Number
        </button>
        <button class="border border-[#B7E5E8] rounded-md px-4 py-1">
          Share
        </button>
      </div>
    </div>
  `,
})
export class PrefferedSponsoredChoiceComponent {
  @Input() oneChoice!: any;
}
