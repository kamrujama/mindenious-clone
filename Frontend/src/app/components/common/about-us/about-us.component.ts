import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MentorsCardComponent } from '../../reusable/cards/mentors-card/mentors-card.component';
import { WhyChooseUsComponent } from '../../reusable/why-choose-us/why-choose-us.component';
import { CareerReviewsComponent } from '../../reusable/career-reviews/career-reviews.component';
import { AlumniComponent } from '../../reusable/alumni/alumni.component';
import { Ratings } from '../../../../../data';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    MentorsCardComponent,
    WhyChooseUsComponent,
    CareerReviewsComponent,
    AlumniComponent,
    NgOptimizedImage
   ],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          backgroundColor: 'yellow',
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
          backgroundColor: 'blue',
        }),
      ),
      transition('* => closed', [animate('1s')]),
      transition('* => open', [animate('0.5s')]),
    ]),
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  ourServices = [
    {
      title: "Our Vision",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '30% 70% 70% 30% / 29% 31% 69% 71%'
    },
    {
      title: "Our Mission",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '77% 23% 19% 81% / 70% 50% 50% 30%'
    },
    {
      title: "Our Values and Culture",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '0% 100% 21% 79% / 26% 72% 28% 74% '
    },

  ]

  ratings = Ratings
}
