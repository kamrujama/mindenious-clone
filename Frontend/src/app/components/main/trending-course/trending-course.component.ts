import { Component, Renderer2, ViewChild } from '@angular/core';
import { NavbarService } from '../../../services/header/navbar.service';
import { TopFeaturedCourses, CourseCategoryData } from '../../../../../data';
import { TopFeaturedCoursesComponent } from '../../reusable/top-featured-courses/top-featured-courses.component';
import { TrendingCourseListsComponent } from '../../reusable/trending-course-lists/trending-course-lists.component';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-trending-course',
  standalone: true,
  imports: [
    TopFeaturedCoursesComponent,
    TrendingCourseListsComponent
  ],
  templateUrl: './trending-course.component.html',
  styleUrl: './trending-course.component.scss'
})

export class TrendingCourseComponent {
  @ViewChild('tredingCourses') tredingCourses: any;
  topFeaturedCourses = TopFeaturedCourses;
  courseCategory = CourseCategoryData;
  coursesList = CourseCategoryData[0];

  constructor(private navbarService: NavbarService, private renderer: Renderer2, private scrollService: ScrollService) {}

  ngOnInit() {
  }
  navigateToCourse(path:string, details:any) {
    this.navbarService.navigateToCourse(path, details);
  }

  toggleProgramSubmenu(title:string, course:any) {
    this.coursesList = course;
    let subdomains = course.subdomains;
    if (subdomains.length > 3) {
      this.renderer.setStyle(this.tredingCourses.nativeElement, 'height', '100vh');
    } else {
      this.renderer.setStyle(this.tredingCourses.nativeElement, 'height', '75vh');
    }

    this.courseCategory.forEach((domain) => {
      if(domain.title === title) {
        domain.isExpanded = true;
      } else {
        domain.isExpanded = false;
      }
    })
  }

  scrollToTrendingCourse(id:string) {
    this.scrollService.scrollIntoView(id);
  }
}
