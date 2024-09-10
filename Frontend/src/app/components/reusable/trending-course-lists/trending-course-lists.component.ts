import { Component, Renderer2, ViewChild } from '@angular/core';
import { NavbarService } from '../../../services/header/navbar.service';
import { CourseCategoryData } from '../../../../../data';
import { ShortenPipe } from '../../../pipes/shorten.pipe';

@Component({
  selector: 'app-trending-course-lists',
  standalone: true,
  imports: [
    ShortenPipe
  ],
  templateUrl: './trending-course-lists.component.html',
  styleUrl: './trending-course-lists.component.scss'
})
export class TrendingCourseListsComponent {
  @ViewChild('tredingCourses') tredingCourses: any;
  courseCategory = CourseCategoryData;
  coursesList = CourseCategoryData[0];

  constructor(private navbarService: NavbarService, private renderer: Renderer2) {}
  navigateToCourse(path:string, details:any) {
    this.navbarService.navigateToCourse(path, details);
  }

  toggleProgramSubmenu(title:string, course:any) {
    this.coursesList = course;
    let subdomains = course.subdomains;

    // if (subdomains.length > 3) {
    //   this.renderer.setStyle(this.tredingCourses.nativeElement, 'height', '100%');
    // } else {
    //   this.renderer.setStyle(this.tredingCourses.nativeElement, 'height', '75vh');
    // }

    this.courseCategory.forEach((domain) => {
      if(domain.title === title) {
        domain.isExpanded = true;
      } else {
        domain.isExpanded = false;
      }
    })
  }
}
