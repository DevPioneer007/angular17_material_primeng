import { Component } from '@angular/core';
import { LandingToolbarComponent } from '../../../../components/landing-toolbar/landing-toolbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drillers',
  standalone: true,
  imports: [LandingToolbarComponent, CommonModule],
  templateUrl: './drillers.component.html',
  styleUrl: './drillers.component.css',
})
export class DrillersComponent {
  drillerTaps = [
    {
      imgSel: 'truck_light.svg',
      imgUnSel: 'truck_dark.svg',
      title: 'BOREHOLE DRILLING COMPANY',
      contents: [
        'By the regulation, the Commission can not issue a Borehole Driller’s license but a “Borehole Drilling license”. The Commission is expected by law to enthrone controls over the activities of the drillers in abstracting the groundwater resources. Hence, a borehole drilling license is a regulatory certificate authorizing a proponent to access the groundwater resources and certifying a driller’s competence on the technical knowhow of harnessing groundwater in line with the Commission practice order.',
        'The license empowers a driller to harness or carry out borehole drilling activities in any part of the state. The license is not transferable and subject to revocation. The License can be obtained by either as an individual or as a corporate body or organization, the difference would be in the approved regulatory fees and it has an expiring period when it should be renewed subject to a further regulatory inspection clearance by the Geo-Scientist',
      ],
    },
    {
      imgSel: 'technician_light.svg',
      imgUnSel: 'technician_dark.svg',
      title: 'DRILLER / TECHNICIAN',
      contents: [],
    },
    {
      imgSel: 'technician_light.svg',
      imgUnSel: 'technician_dark.svg',
      title: 'BOREHOLE DRILLING COMPANY',
      contents: [],
    },
    {
      imgSel: 'technician_light.svg',
      imgUnSel: 'technician_dark.svg',
      title: 'BOREHOLE DRILLING COMPANY',
      contents: [],
    },
  ];

  selectedTapIndex: number = 0;
  setSelectedTapIndex(newIndex: number) {
    this.selectedTapIndex = newIndex;
  }
}
