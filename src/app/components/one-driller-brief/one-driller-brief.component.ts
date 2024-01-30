import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';

@Component({
  selector: 'app-one-driller-brief',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bg-white p-4 rounded-b-2xl shadow-xl text-[#121212] brief">
      <p [innerHTML]="this.curProfileData?.hydronetDrillerBusiness[0]?.companyBusinessBrief"></p>
    </div>
  `,
})
export class OneDrillerBriefComponent implements OnInit {

  curProfileData: any;
  
  constructor(
    private companyDataService: CompanyDataService,
  ) {}

  ngOnInit(): void {
    let data = localStorage.getItem("curProfileData");
    if(data) {
      this.curProfileData = JSON.parse(data);
      localStorage.removeItem('curProfileData');
    } else {
    }
  }
}
