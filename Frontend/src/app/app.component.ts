import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsletterSubscriptionModalComponent } from './components/reusable/newsletter-subscription-modal/newsletter-subscription-modal.component';
import { Router } from '@angular/router';
import { SubscribedCardComponent } from './components/reusable/cards/subscribed-card/subscribed-card.component';
import { FormsServices } from './services/forms.service';
import { DarkFooterComponent } from './components/footer/dark-footer/dark-footer.component';
import { CompanyCollabComponent } from './components/main/company-collab/company-collab.component';
import { SignalService } from './services/signal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    RouterLink,
    RouterLinkActive,
    NewsletterSubscriptionModalComponent,
    SubscribedCardComponent,
    DarkFooterComponent,
    CompanyCollabComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'lms-project';
  showNewsLetterPopup: boolean = false;
  signalService = inject(SignalService);
  private timeoutId: any;

  constructor(private router: Router, protected formsService: FormsServices) {

  }
  ngOnInit() {}

  closePopup() {
    this.showNewsLetterPopup = false;
  }
}
