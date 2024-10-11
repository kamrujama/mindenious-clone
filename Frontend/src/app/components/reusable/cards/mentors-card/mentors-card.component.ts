import { Component } from '@angular/core';
import { MentorsDetails } from '../../../../../../data';
import { SliderComponent } from '../../slider/slider.component';

@Component({
  selector: 'app-mentors-card',
  standalone: true,
  imports: [
    SliderComponent
  ],
  templateUrl: './mentors-card.component.html',
  styleUrl: './mentors-card.component.scss'
})
export class MentorsCardComponent {
  mentorDetails = MentorsDetails;
  currentMentorIndex = 0;
}
