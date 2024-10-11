import { Component } from '@angular/core';
import { FAQs } from '../../../../../data';
import { AccordianComponent } from '../accordian/accordian.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    AccordianComponent
  ],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss'
})
export class FAQsComponent {
  faqsData = FAQs;
}
