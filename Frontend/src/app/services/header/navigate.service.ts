import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  logoPath = '../../assets/images/logo.png';
  courseData: any;
  isLoggedInUser = false;

  constructor(private router: Router) { }

  getLogoPath() {
    return this.logoPath;
  }

  getRouterLink(link: string): string {
    return link.replace(' ', '').toLowerCase();
  }

  navigateTo(path: string) {
    this.router.navigateByUrl(path);
    window.scrollTo(0, 0);
  }

  navigateToCourse(path: string, details: any) {
    if (typeof details === 'object') {
      this.router.navigate([path, details.id]);
    } else {
      this.router.navigate([path, details]);
    }
    window.scrollTo(0, 0);
  }

  navigateToComboPack(path: string, data: any) {
    this.router.navigate([path, data.id], { queryParams: { current_pack: data.title.split(' ').join('-') } });
    window.scrollTo(0, 0);
  }

  navigateToOpening(path: string, id: number) {
    this.router.navigate([path, id]);
    window.scrollTo(0, 0);
  }

  isLinkActive(path: string) {
    return this.router.isActive(path, false) && this.router.url === path;
  }

}
