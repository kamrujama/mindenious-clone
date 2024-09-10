import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-title',
  standalone: true,
  imports: [],
  templateUrl: './component-title.component.html',
  styleUrl: './component-title.component.scss'
})
export class ComponentTitleComponent {
  @Input() sectionHeadData = {
    sectionOverline: 'Your goals are our goals',
    sectionTitle: 'Invest in yourself today. Unlock success for a lifetime.',
    sectionSubtitle: 'Mindenious offers a unique blend of learning methods — including lectures from top faculty, group discussions and mentoring sessions, that keep learners motivated every step of the way.'
  }

  constructor() {}

  ngOnInit() {

  }
}
