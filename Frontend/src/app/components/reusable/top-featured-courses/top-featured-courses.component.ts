import { Component } from '@angular/core';
import { NavbarService } from '../../../services/header/navbar.service';
import { TopFeaturedCourses } from '../../../../../data';

@Component({
  selector: 'app-top-featured-courses',
  standalone: true,
  imports: [],
  templateUrl: './top-featured-courses.component.html',
  styleUrl: './top-featured-courses.component.scss'
})
export class TopFeaturedCoursesComponent {

  topFeaturedCourses = TopFeaturedCourses;

  constructor(private navbarService: NavbarService) {}
  navigateToCourse(path:string, details:any) {
    this.navbarService.navigateToCourse(path, details);
  }
}
