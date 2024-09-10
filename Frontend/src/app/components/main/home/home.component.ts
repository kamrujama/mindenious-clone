import { Component } from '@angular/core';
import { BannerComponent } from '../../reusable/banner/banner.component';
import { ComapnyCollaborateComponent } from '../../reusable/comapny-collaborate/comapny-collaborate.component';
import { StatisticsComponent } from '../../reusable/statistics/statistics.component';
import { AlumniComponent } from '../../reusable/alumni/alumni.component';
import { TopFeaturedCoursesComponent } from '../../reusable/top-featured-courses/top-featured-courses.component';
import { TrendingCourseListsComponent } from '../../reusable/trending-course-lists/trending-course-lists.component';
import { HomeLandingPageComponent } from '../home-landing-page/home-landing-page.component';
import { MentorsCardComponent } from '../../reusable/cards/mentors-card/mentors-card.component';
import { ComboPackComponent } from '../../reusable/combo-pack/combo-pack.component';
import { Tools } from '../../../../../data';
import { CareerReviewsComponent } from '../../reusable/career-reviews/career-reviews.component';
import { WhyChooseUsComponent } from '../../reusable/why-choose-us/why-choose-us.component';
import { ApplicationProcessComponent } from '../../reusable/application-process/application-process.component';
import { CompaniesCollaborationComponent } from '../../reusable/companies-collaboration/companies-collaboration.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ComapnyCollaborateComponent,
    StatisticsComponent,
    AlumniComponent,
    TopFeaturedCoursesComponent,
    TrendingCourseListsComponent,
    HomeLandingPageComponent,
    MentorsCardComponent,
    ComboPackComponent,
    CareerReviewsComponent,
    WhyChooseUsComponent,
    ApplicationProcessComponent,
    CompaniesCollaborationComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  promotionData = {
      learnerTitle: 'what our learners say',
      learnerImgSrc: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/contact-us.png',
      bannerTitle: 'From promotions to transitions, Mindenious Learning opens new doors',
      bannerSubtitle: 'Learners share testimonies about their Mindenious Learning experiences and outcomes.',
      bannerCta: 'Watch Testimonials'
  }

  companyData = [
    { name: "MIT IDSS", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/mit-idss.png" },
    { name: "Wharton", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/wharton.png" },
    { name: "Stanford", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/stanford-1.png" },
    { name: "MIT", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/mit.png" },
    { name: "Texas", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/texas.png" },
    { name: "Northwestern", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/northwestern.png" }
  ];

  toolsData = Tools;

  constructor() { }

  ngOnInit() {}
}
