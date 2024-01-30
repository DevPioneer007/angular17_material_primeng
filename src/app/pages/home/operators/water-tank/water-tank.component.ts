import { Component } from '@angular/core';
import { LandingToolbarComponent } from '../../../../components/landing-toolbar/landing-toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-water-tank',
  standalone: true,
  imports: [
    LandingToolbarComponent,
    MatCardModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './water-tank.component.html',
  styleUrl: './water-tank.component.css',
})
export class WaterTankComponent {
  tankers = [
    { name: 'Potable  Water Tank Carrier', img: 'potable.png' },
    { name: 'General Purpose  Water Tank Carrier', img: 'general_purpose.png' },
    { name: 'General Purpose  Water Tank Carrier', img: 'general_purpose.png' },
  ];
  contents = [
    "LASWARCO, in its commitment to bolstering the operational efficiency of water tanker services in Lagos State, has instituted a robust regulatory framework. Acknowledging the indispensable role played by water tanker operators in meeting consumers' water needs, LASWARCO has implemented a dynamic registration and licensing system. This ensures the seamless inclusion of all water providers within the regulatory ambit.",
    "Addressing the previously unregulated activities of water tanker operators, LASWARCO has taken a multifaceted approach. This includes interventions on pricing structures and crucial aspects such as water storage hygiene and quality. The Commission, through the strict enforcement of standards and guidelines, is dedicated to fostering a competitive market. This guarantees consumers access to water of impeccable quality and affordability, be it for personal use or bulk resale through domestic vendors.",
    "LASWARCO remains resolute in its mandate to safeguard consumer interests. In areas where municipal water reticulation systems face challenges or there is an inadequate supply for domestic consumption, the Commission is proactive. Recognizing the reliance on water tanker services in such situations, LASWARCO is committed to mitigating shortfalls. This ensures that consumers in need of clean and drinkable water have a dependable supply option, particularly in areas where municipal water supply may be erratic or insufficient.",
    "LASWARCO as streamlined and modernize the water supply process of the Water tankers by introducing a state-of-the-art water consumer tracking and ordering platform. This platform serves as a centralized system connecting all residents who wish to order water tanker services online from the Laswarco_hydronet platforms. ",
    "Furthermore, LASWARCO has implemented a flexible inspection and automated management system to monitor the hygiene and cleanliness of water tankers storage compartments, discharge lines and collection depots. This system is designed to streamline the inspection process, making it more efficient and ensuring that water tankers comply with established standards. The automated management system facilitates real-time monitoring, allowing LASWARCO to promptly address any issues related to tank hygiene and cleanliness.",
    "By combining these regulatory measures, LASWARCO aims to create an environment that supports the smooth operation of water tanker services, provides convenient options for consumers, and ensures that the highest standards of hygiene and cleanliness are maintained in the delivery of water services across the state.",
  ];
}
