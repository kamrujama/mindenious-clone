import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending-course-bar',
  standalone: true,
  imports: [],
  templateUrl: './trending-course-bar.component.html',
  styleUrl: './trending-course-bar.component.scss'
})
export class TrendingCourseBarComponent {

  constructor(private router: Router) { }
  navigateToTrendingCourse() {
    this.router.navigate(['/trending-course']);
  }
}
