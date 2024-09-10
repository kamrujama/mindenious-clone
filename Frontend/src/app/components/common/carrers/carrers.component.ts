import { Component } from '@angular/core';
import { ServiceCardComponent } from '../../reusable/service-card/service-card.component';
import { Router } from '@angular/router';
import { CurrentOpeningsComponent } from '../../main/current-openings/current-openings.component';
import { ScrollService } from '../../../services/scroll.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-carrers',
  standalone: true,
  imports: [
    CurrentOpeningsComponent,
    NgOptimizedImage
  ],
  templateUrl: './carrers.component.html',
  styleUrl: './carrers.component.scss'
})
export class CarrersComponent {

  ourWork = [
    {
      imgSrc: "https://framerusercontent.com/assets/ZFlpS33bQBA693UEg5luVokGf9k.mp4",
      title: "Our Work",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      imgSrc: "https://framerusercontent.com/assets/8zgVJa1RXODs2cVPJ7LT9FNskc.mp4",
      title: "Our Work",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      imgSrc: "https://framerusercontent.com/assets/Mlf30a1GdrmSnwaeQt1u1mf910.mp4",
      title: "Our Work",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  ourServices = [
    {
      title: "Branding and Design",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '30% 70% 70% 30% / 29% 31% 69% 71%'
    },
    {
      title: "Production Development",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '77% 23% 19% 81% / 70% 50% 50% 30%'
    },
    {
      title: "Social Media & Marketing",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '0% 100% 21% 79% / 26% 72% 28% 74% '
    },
    {
      title: "Our Mission",
      description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
      icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
      show: false,
      borderRadius: '72% 28% 41% 59% / 54% 72% 28% 46% '
    },

  ]

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit() {}

  showMore(data: any) {
    data.show = !data.show
  }

  goToAboutUs() {
    this.router.navigate(['aboutus']);
  }

  scrollToCurrentOpenings(id:string) {
    this.scrollService.scrollIntoView(id);
  }

}
