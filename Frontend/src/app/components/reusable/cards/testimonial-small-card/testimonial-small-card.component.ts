import { Component, Input } from '@angular/core';
import { ComponentTitleComponent } from '../../component-title/component-title.component';

@Component({
  selector: 'app-testimonial-small-card',
  standalone: true,
  imports: [ComponentTitleComponent],
  templateUrl: './testimonial-small-card.component.html',
  styleUrl: './testimonial-small-card.component.scss'
})
export class TestimonialSmallCardComponent {
  sectionHeadData = {
    sectionOverline: 'Online learning done better',
    sectionTitle: 'Discover what makes our programs unique',
    sectionSubtitle: 'The best university professors, industry mentors, real hands-on projects, designed for busy professionals. That\'s what makes Mindenious Learning programs the best for learning new skills'
  }

  @Input() cardData = [
    {
      cardOverLine: 'the BEST-in-class instructors',
      title: 'Renowned professors with proven track records ',
      subTitle: 'Interact with and learn from esteemed professors who’ve taught some of today’s greatest minds in the fields of technology, business, and beyond.',
      imageSrc: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/advantage-1.jpg',
      imageOrder: 'row'
    },
    {
      cardOverLine: 'the industry mentors',
      title: 'Industry experts who  already work in your desired field',
      subTitle: 'Mindenious programs go beyond theory. Our network of professional mentors guide and support you, helping you to land the job and achieve remarkable success.',
      imageSrc: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/advantage-2.jpg',
      imageOrder: 'row-reverse'
    },
    {
      cardOverLine: 'the projects &amp; Teamwork',
      title: 'Hands-on projects to showcase your new knowledge',
      subTitle: 'Unlike self-learn online courses, Mindenious provides you with opportunities to collaborate with your peers and industry experts on portfolio-building projects.',
      imageSrc: 'https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/advantage-3.jpg',
      imageOrder: 'row'
    },
  ]
}
