import { Component } from '@angular/core';
import { MentorsDetails } from '../../../../../../data';

@Component({
  selector: 'app-mentors-card',
  standalone: true,
  imports: [],
  templateUrl: './mentors-card.component.html',
  styleUrl: './mentors-card.component.scss'
})
export class MentorsCardComponent {
  mentorDetails = MentorsDetails;
}
