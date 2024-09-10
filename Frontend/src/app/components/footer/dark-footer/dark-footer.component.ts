import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsServices } from '../../../services/forms.service';
import { NavbarService } from '../../../services/header/navbar.service';
import { TechnicalCourses, NonTechnicalCourses } from '../../../../../data';
import { CustomAccordionComponent } from '../../reusable/custom-accordion/custom-accordion.component';

@Component({
  selector: 'app-dark-footer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CustomAccordionComponent
  ],
  templateUrl: './dark-footer.component.html',
  styleUrl: './dark-footer.component.scss'
})
export class DarkFooterComponent {

  loading:boolean = false;
  socialLinks = [
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=61564161206500',
      icon: 'fa fa-facebook'
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/company/mindenious/',
      icon: 'fa fa-linkedin'
    },
    {
      title: 'Twitter',
      link: 'https://x.com/Mindeniousedtech',
      icon: 'fa fa-twitter'
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/mindenious?igsh=ZTZseXU4OWM0Znl6&utm_source=qr',
      icon: 'fa fa-instagram'
    },
  ]
  techCourses = TechnicalCourses;
  nonTechCourses = NonTechnicalCourses;
  usefullLinks = [
    {
      name: 'About Us',
      routePath: '/aboutus'
    },
    {
      name: 'Contact Us',
      routePath: '/contact'
    },
    {
      name: 'Privacy Policy',
      routePath: '/privacy-policy'
    },
    {
      name: 'Terms & Conditions',
      routePath: '/terms-and-conditions'
    },
    {
      name: 'Return policy',
      routePath: '/return-policy'
    },
    {
      name: 'Careers',
      routePath: '/carrers'
    },
  ];

  constructor(private router: Router, private formsService: FormsServices, private navbarService: NavbarService) {}

  ngOnInit() {}

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
    window.scrollTo(0, 0);
  }

  navigateToCourse(path:string, details:any) {
    this.navbarService.navigateToCourse(path, details);
  }

  subscribe(formData: any) {
    let {email} = formData.value;
    if (email) {
      this.loading = true;
      this.formsService.onFormSubmit(formData);
      this.formsService.isSubscribed$.subscribe(res => {
        if (res) {
          this.loading = false;
        }
      });
    }
  }
}
