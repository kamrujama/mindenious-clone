import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarService } from '../../services/header/navbar.service';
import { CourseCardComponent } from '../reusable/cards/course-card/course-card.component';
import { LoginComponent } from '../main/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthenticationService } from '../../services/authentication.service';
import { CourseCategoryData, TrendingCourses } from '../../../../data';
import { TrendingCourseBarComponent } from '../common/trending-course-bar/trending-course-bar.component';
import { ShortenPipe } from '../../pipes/shorten.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CourseCardComponent,
    LoginComponent,
    SidebarComponent,
    TrendingCourseBarComponent,
    ShortenPipe
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isNavMenusOpen:boolean = false;
  isMobileNavOpen:boolean = false;
  isSubMenuOpened = false;
  selectedDomain = 'IT Domains';
  logoPath = '';
  topTrendingCourses = TrendingCourses

  mainNavMenuObjects = [
    {
      "title": "Home",
      "link": "/",
      "icon": "fa fa-home"
    },
    {
      "title": "About Us",
      "link": "/aboutus",
      "icon": "fa fa-info-circle"
    },
    {
      "title": "Careers",
      "link": "/carrers",
      "icon": "fa fa-briefcase"
    },
    {
      "title": "Contact Us",
      "link": "/contact",
      "icon": "fa fa-envelope"
    }
  ];

  megaMenuObject:any[] = [];
  showMegaMenu: boolean = false;
  isSideMenuOpen: boolean = false;
  isLoginPopupOpen: boolean = false;
  isTrendingModalOpen: boolean = false;

  auth = inject(AuthenticationService);

  constructor(private route: ActivatedRoute, private router: Router, private navbarService: NavbarService) {}
  ngOnInit() {
    this.logoPath = this.navbarService.getLogoPath();
    this.megaMenuObject = [...CourseCategoryData];
  }

  getRouterLink(link:string):string {
    return this.navbarService.getRouterLink(link);
  }

  navigateTo(path:string) {
    this.isTrendingModalOpen = false;
    this.showMegaMenu = false;
    this.navbarService.navigateTo(path);
    window.scrollTo(0, 0);
  }

  navigateToCourse(path:string, details:any) {
    this.showMegaMenu = false;
    this.isSideMenuOpen = false;
    this.navbarService.navigateToCourse(path, details);
  }

  isLinkActive(path:string) {
    return this.navbarService.isLinkActive(path);
  }

  toggleProgramSubmenu(title:string) {
    this.isTrendingModalOpen = false;
    this.megaMenuObject.forEach((domain) => {
      if(domain.title === title) {
        domain.isExpanded = true;
      } else {
        domain.isExpanded = false;
      }
    })
  }

  toggleSidebar(title:string) {
    this.isTrendingModalOpen = false;
    this.isSideMenuOpen = true;
    this.megaMenuObject.forEach((domain) => {
      if(domain.title === title) {
        domain.isExpanded = true;
      } else {
        domain.isExpanded = false;
      }
    })
  }

  closeSidebar() {
    this.showMegaMenu = false;
  }

  closeSubMenu() {
    this.isSideMenuOpen = false;
  }

  openLoginPopup() {
    this.isLoginPopupOpen = !this.isLoginPopupOpen;
  }
}
