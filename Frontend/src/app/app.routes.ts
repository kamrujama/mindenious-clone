import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { AboutUsComponent } from './components/common/about-us/about-us.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { CarrersComponent } from './components/common/carrers/carrers.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { CoursesComponent } from './components/main/courses/courses.component';
import { LoginComponent } from './components/main/login/login.component';
import { EnrollComponent } from './components/main/enroll/enroll.component';
import { NewsletterSubscriptionModalComponent } from './components/reusable/newsletter-subscription-modal/newsletter-subscription-modal.component';
import { TrendingCourseComponent } from './components/main/trending-course/trending-course.component';
import { ReturnPolicyComponent } from './components/main/return-policy/return-policy.component';
import { PrivacyPolicyComponent } from './components/main/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/main/terms-conditions/terms-conditions.component';
import { ComboPackComponent } from './components/reusable/combo-pack/combo-pack.component';
import { ComboPackEnrollComponent } from './components/main/combo-pack-enroll/combo-pack-enroll.component';
import { OpeningDetailsComponent } from './components/main/current-openings/opening-details/opening-details.component';
import { MetaGaurd } from './guards/meta.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [MetaGaurd],
    data: {
      title: 'Mindenious Edutech | Advanced Learning, Training and Internships Programs',
      description: 'Welcome to Mindenious Edutech, your gateway to quality online learning, internships, and placements.'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [MetaGaurd],
    data: {
      title: 'Home - Mindenious Edutech',
      description: 'Welcome to Mindenious Edutech, your gateway to quality online learning, internships, and placements.'
    }
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    canActivate: [MetaGaurd],
    data: {
      title: 'About Us - Mindenious Edutech',
      description: 'Learn more about Mindenious Edutech, our mission, vision, and the team dedicated to your success.'
    }
  },
  {
    path: 'carrers',
    component: CarrersComponent,
    canActivate: [MetaGaurd],
    data: {
      title: 'Careers - Mindenious Edutech',
      description: 'Explore exciting career opportunities with Mindenious Edutech and become a part of our growing team.'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [MetaGaurd],
    data: {
      title: 'Contact Us - Mindenious Edutech',
      description: 'Get in touch with Mindenious Edutech for any inquiries, support, or partnership opportunities.'
    }
  },
  // {
  //   path: 'course/:id',
  //   component: CoursesComponent,
  //   canActivate: [MetaGaurd],
  //   data: {
  //     title: 'Course Details - Mindenious Edutech',
  //     description: 'Discover the details of our top-rated courses designed to enhance your skills and career prospects.'
  //   }
  // },
  {
    path: 'course/:courseName',
    component: CoursesComponent,
    canActivate: [MetaGaurd],
    data: {
      title: 'Course Details - Mindenious Edutech',
      description: 'Discover the details of our top-rated courses designed to enhance your skills and career prospects.'
    }
  },
  {
    path: 'enroll',
    component: EnrollComponent,
    canActivate: [MetaGaurd],
    data: {
      title: 'Enroll Now - Mindenious Edutech',
      description: 'Join Mindenious Edutech today and start your journey towards academic and professional excellence.'
    }
  },
  {
    path: 'newsletter-subscription',
    canActivate: [MetaGaurd],
    component: NewsletterSubscriptionModalComponent,
    data: {
      title: 'Subscribe to Our Newsletter - Mindenious Edutech',
      description: 'Stay updated with the latest courses, offers, and educational insights by subscribing to our newsletter.'
    }
  },
  {
    path: 'trending-course',
    canActivate: [MetaGaurd],
    component: TrendingCourseComponent,
    data: {
      title: 'Trending Courses - Mindenious Edutech',
      description: 'Explore the most popular courses at Mindenious Edutech, chosen by our students and industry experts.'
    }
  },
  {
    path: 'combo-pack/:id',
    canActivate: [MetaGaurd],
    component: ComboPackEnrollComponent,
    data: {
      title: 'Combo Pack Enrollment - Mindenious Edutech',
      description: 'Get the best value for your learning with our specially curated combo packs at Mindenious Edutech.'
    }
  },
  {
    path: 'current-opening/details/:id',
    canActivate: [MetaGaurd],
    component: OpeningDetailsComponent,
    data: {
      title: 'Current Job Openings - Mindenious Edutech',
      description: 'View the details of our current job openings and apply to join the Mindenious Edutech team.'
    }
  },
  {
    path: 'return-policy',
    canActivate: [MetaGaurd],
    component: ReturnPolicyComponent,
    data: {
      title: 'Return Policy - Mindenious Edutech',
      description: 'Understand our return policy to ensure a smooth and hassle-free experience with Mindenious Edutech.'
    }
  },
  {
    path: 'privacy-policy',
    canActivate: [MetaGaurd],
    component: PrivacyPolicyComponent,
    data: {
      title: 'Privacy Policy - Mindenious Edutech',
      description: 'Read our privacy policy to learn how Mindenious Edutech protects your personal information.'
    }
  },
  {
    path: 'terms-and-conditions',
    canActivate: [MetaGaurd],
    component: TermsConditionsComponent,
    data: {
      title: 'Terms and Conditions - Mindenious Edutech',
      description: 'Review the terms and conditions of using the services offered by Mindenious Edutech.'
    }
  },
  {
    path: '**',
    canActivate: [MetaGaurd],
    component: NotFoundComponent,
    data: {
      title: 'Page Not Found - Mindenious Edutech',
      description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'
    }
  }
];

