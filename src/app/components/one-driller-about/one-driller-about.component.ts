import { Component } from '@angular/core';
import { Reveiw } from '../../interfaces/reveiw';
import { ReviewComponent } from '../review/review.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-driller-about',
  standalone: true,
  imports: [ReviewComponent, CommonModule],
  templateUrl: "one-driller-about.component.html"
})
export class OneDrillerAboutComponent {
  reviews: Reveiw[] = [
    {
      name: 'Robby J',
      image: '../../../assets/icons/reviewer.svg',
      rating: 4,
      body: 'Lorem ipsum dolor sit amet consectetur. Et in orci quis nisi ultricies urna aliquam vitae id. Nam sed pharetra sed viverra feugiat erat faucibus. Morbi libero tincidunt sit a lacus. Eu neque lorem facilisis egestas a suspendisse feugiat id nec. Egestas urna penatibus magna massa. Ut eu nibh duis in pellentesque elementum augue cras. Metus nisl nulla egestas blandit. A placerat morbi ut dictumst aenean nulla nibh aenean purus. Lacus eget nullam maecenas purus. Neque mi tristique a morbi amet facilisi nulla.',
    },
    {
      name: 'Selena G',
      image: '../../../assets/icons/reviewer.svg',
      rating: 5,
      body: 'Lorem ipsum dolor sit amet consectetur. Pellentesque quisque in lobortis nisi. Dolor tristique id molestie sollicitudin porttitor vestibulum sit ullamcorper non. Habitant enim quam vestibulum turpis. Morbi pulvinar gravida elit dolor urna enim risus nam. Venenatis nulla et diam vel pellentesque. Duis nulla a nisl turpis lacus. Et enim dignissim non cursus. Aliquam dictum ullamcorper vulputate fermentum amet elementum purus id quam. Pharetra risus turpis enim vel sit velit fames nunc. Neque parturient lobortis at potenti ut netus a. Quis tempus nunc lacinia suspendisse quam et urna elementum eget. Id interdum et quis integer mi urna. Diam lectus id fringilla fames nullam tempor mi consectetur. A penatibus porttitor commodo in. Volutpat id quis risus ac. Massa sed amet in condimentum malesuada felis rhoncus neque.',
    },
  ];
}
