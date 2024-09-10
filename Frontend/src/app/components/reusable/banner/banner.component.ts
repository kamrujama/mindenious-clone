import { Component, Input } from '@angular/core';
import { ComponentTitleComponent } from '../component-title/component-title.component';
import { ScrollService } from '../../../services/scroll.service';
import { NgOptimizedImage } from '@angular/common';
import { NewsletterSubscriptionModalComponent } from '../newsletter-subscription-modal/newsletter-subscription-modal.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    ComponentTitleComponent,
    NgOptimizedImage,
    NewsletterSubscriptionModalComponent
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  @Input() bannerData = {
    bannerTitle: 'Learn, Build and Grow',
    bannerSubtitle: 'Level up your skills and supercharge your career with our transformative programs.',
    bannerCta: 'Explore Programs',
    learnerImgSrc: 'assets/images/discover.png'
  };
  sectionHeadData = {
    sectionOverline: 'Online learning done better',
    sectionTitle: 'Discover what makes our programs unique',
    sectionSubtitle: 'Mindenious Learning programs are crafted for busy professionals, featuring top university professors, industry mentors, and real hands-on projects. Our approach ensures you gain practical skills from the best in the field, making our programs the ideal choice for those looking to advance their careers and master new skills effectively.'
  }
  isEnrollNow:boolean = false;

  constructor(private scrollService: ScrollService) {}
  ngOnInit() {}

  scrollIntoView(id:string) {
    this.scrollService.scrollIntoView(id);
  }
  toggleEnrollNow() {
    this.isEnrollNow = true;
  }
}
