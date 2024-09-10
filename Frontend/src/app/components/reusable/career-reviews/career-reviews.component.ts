import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-career-reviews',
  standalone: true,
  imports: [],
  templateUrl: './career-reviews.component.html',
  styleUrl: './career-reviews.component.scss'
})
export class CareerReviewsComponent {
  @Input() careerData = [
    {
      "learner": {
        "name": "Abhishek Kumar Shukla",
        "image": "assets/images/reviews/2.jpg"
      },
      "story": "“Mindenious offers flexible, user-friendly learning at any time and on any device. The progress tracking feature keeps me motivated. Perfect for anyone looking to upskill or advance their career.”",
      rating: 5
    },
    {
      "learner": {
        "name": "Chaithra v reddy",
        "image": "assets/images/reviews/chaitra.png"
      },
      "story": "It is flexible, user-friendly platform makes upskilling easy and enjoyable. The best online platform I've used. Definitely worth investing in!",
      rating: 5,
    },
    {
      "learner": {
        "name": "Roshani Choudhary",
        "image": "assets/images/reviews/1.jpg"
      },
      "story": "“Mindenious Edtech's top-notch content and exceptional customer support make for an outstanding learning experience. Highly recommend!”",
      rating: 5
    },
    {
      "learner": {
        "name": "Dev Patel",
        "image": "assets/images/reviews/dev.png"
      },
      "story": "Coming from a commerce background, I initially lacked IT skills. My mentor greatly helped me build my knowledge and resume from scratch.",
      rating: 5
    },
  ];

  isLeftDisabled = true;
  isRightDisabled = false;
  sliderWrapper:HTMLElement | any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.sliderWrapper = this.elementRef.nativeElement.querySelector('.slider-wrapper');
  }

  slideNext() {
    if (this.isDivAtRightEnd()) {
      this.isRightDisabled = true;
      return;
    } else {
      this.isLeftDisabled = false;
      this.sliderWrapper.scrollLeft += 900; // Corrected line
    }
  }

  slidePrev() {
    if (this.isDivAtLeftEnd()) {
      this.isLeftDisabled = true;
      return;
    } else {
      this.isRightDisabled = false;
      this.sliderWrapper.scrollLeft -= 900; // Corrected line
    }
  }

  isDivAtLeftEnd() {
    let div = this.sliderWrapper;
    if (div.scrollLeft <= 0) {
      this.isLeftDisabled = true;
      return;
    }

    this.sliderWrapper.scrollLeft -= 900; // Corrected line
    this.isLeftDisabled = false;
    return div.scrollLeft <= 0;
  }

  isDivAtRightEnd() {
    let div = this.sliderWrapper;
    return div.scrollLeft + div.clientWidth >= div.scrollWidth;
  }

}
