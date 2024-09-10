import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
  @Input() courseName:string = 'Full Stack Web Development';
  @Input() courseBgImg:string = '/assets/web/bg.jpeg';
  @Input() courseDuration:string = '3 Months';
  @Input() courseMode:string = 'Live';
  @Input() height:string = '140px';
  @Input() width:string = '230px';
  @Input() bgColor:string = 'var(--bg-light)';
  @Input() fontSize:string = '14px';

  ngOnInit() {

  }
}
