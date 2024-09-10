import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavbarService } from '../../../services/header/navbar.service';
import { CourseCardComponent } from '../../reusable/cards/course-card/course-card.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CourseCardComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() megaMenuObject:any[] = [];
  @Input() isSidebarActive: boolean = false;
  @Output() closeMegaMenu = new EventEmitter<Boolean>();
  showMegaMenu: boolean = false;
  isSideMenuOpen: boolean = false;

  constructor(private navbarService: NavbarService) {}
  ngOnInit() {}

  showSideMenu:boolean = false;
  getRouterLink(link:string):string {
    return this.navbarService.getRouterLink(link);
  }

  navigateTo(path:string) {
    this.navbarService.navigateTo(path);
    window.scrollTo(0, 0);
  }

  navigateToCourse(path:string, details:any) {
    this.closeSidebar();
    this.navbarService.navigateToCourse(path, details);
  }

  isLinkActive(path:string) {
    return this.navbarService.isLinkActive(path);
  }

  toggleSidebar(title:string) {
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
    this.closeMegaMenu.emit(true);
    this.isSidebarActive = false;
    this.isSideMenuOpen = false;
  }

  closeSubMenu() {
    this.isSideMenuOpen = false;
  }

}
