import { Component } from '@angular/core';

@Component({
  selector: 'app-home-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './home-landing-page.component.html',
  styleUrl: './home-landing-page.component.scss'
})
export class HomeLandingPageComponent {
  ourServices = [
    {
      icon: 'fa fa-book',
      title: 'Training',
      description: 'Structured training by experienced mentors, covering basics to advanced tactics in multiple learning modes.'
    },
    {
      icon: 'fa fa-briefcase',
      title: 'Internship',
      description: 'Real-world projects, mentor guidance, and feedback to boost employability and practical skills.'
    },
    {
      icon: 'fa fa-user',
      title: 'Placement Support',
      description: 'Aptitude, personality development, mock interviews, LinkedIn building, and HR preparation for job success.'
    },

  ]

  cards = [
    {
      icon: 'fa fa-tasks',
      title: '3k',
      description: 'Projects'
    },
    {
      icon: 'fa fa-graduation-cap',
      title: '1.5k',
      description: 'Happy Students'
    },
    {
      icon: 'fa fa-star',
      title: '4.9',
      description: 'Satisfications'
    },
  ]
}
