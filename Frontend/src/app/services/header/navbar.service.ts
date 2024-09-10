import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  logoPath = '../../assets/images/logo.png';
  courseData:any;
  isLoggedInUser = false;

  constructor(private router: Router) { }

  getLogoPath() {
    return this.logoPath;
  }

  getRouterLink(link:string):string {
    return link.replace(' ', '').toLowerCase();
  }

  navigateTo(path:string) {
    this.router.navigateByUrl(path);
    window.scrollTo(0, 0);
  }

  navigateToCourse(path:string, details:any) {
    this.router.navigate([path, details.courseName.split(' ').join('-')]);
    window.scrollTo(0, 0);
  }
  // navigateToCourse(path:string, details:any) {
  //   this.router.navigate([path, details.id], {
  //     queryParams: {
  //       course: details.courseName.split(' ').join('-'),
  //     }
  //   });
  //   window.scrollTo(0, 0);
  // }

  isLinkActive(path:string) {
    return this.router.isActive(path, false) && this.router.url === path;
  }

}
