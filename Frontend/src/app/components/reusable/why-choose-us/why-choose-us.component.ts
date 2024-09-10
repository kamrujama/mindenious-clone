import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WhyChooseUsContent } from '../../../../../data';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [
  ],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WhyChooseUsComponent {
 chooseUsData = WhyChooseUsContent

 constructor() {}

 ngOnInit() {}
}
