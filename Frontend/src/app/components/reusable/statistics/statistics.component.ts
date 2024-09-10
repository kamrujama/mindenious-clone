import { Component, Input } from '@angular/core';
import { ComponentTitleComponent } from '../component-title/component-title.component';
import { Ratings } from '../../../../../data';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [ComponentTitleComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  @Input() statisticData = Ratings
}
