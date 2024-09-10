import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promotion-card',
  standalone: true,
  imports: [],
  templateUrl: './promotion-card.component.html',
  styleUrl: './promotion-card.component.scss'
})
export class PromotionCardComponent {
  @Input() promotionData = {
    learnerTitle: 'what our learners say',
    learnerImgSrc: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/contact-us.png',
    bannerTitle: 'From promotions to transitions, Mindenious Learning opens new doors',
    bannerSubtitle: 'Learners share testimonies about their Mindenious Learning experiences and outcomes.',
    bannerCta: 'Watch Testimonials'
  };

  ngOnInit() {

  }
}
