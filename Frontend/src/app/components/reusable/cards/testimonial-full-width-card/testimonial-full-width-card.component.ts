import { Component, Input } from '@angular/core';

export interface TestimonialFullWidthCardData {
  heading:string,
  body:string,
  devName:string,
  devRole:string,
  videoUrl:string,
  imageUrl:string,
  videoPoster:string
}

@Component({
  selector: 'app-testimonial-full-width-card',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-full-width-card.component.html',
  styleUrl: './testimonial-full-width-card.component.scss'
})

/**
 * `javascript`
 * Input data: {
  heading:string,
  body:string,
  devName:string,
  devRole:string,
  videoUrl:string,
  imageUrl:string,
  videoPoster:string
}
 */
export class TestimonialFullWidthCardComponent {
  @Input() data: TestimonialFullWidthCardData = {
    heading:'The support from mentors, lecturers, and everyone involved was exceptional.',
    body:'Shamelle knew she had to upskill when she moved to another country and chose Data Science as her program. As a single mother, she found the program mentors and lectures comfortable and to her liking, and recommended it to her peers.',
    devName:'Ansari K',
    devRole:'Full Stack Developer',
    videoUrl:'../../../../../assets/videos/video1.mp4',
    imageUrl:'',
    videoPoster: 'https://embed-ssl.wistia.com/deliveries/3c1d237654450048d2a2b45462af5a86.jpg'
  };

  ngOnInit() {

  }

  playVideo() {

  }
}
