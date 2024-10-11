import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject, filter, pairwise } from 'rxjs';
import { FormsServices } from '../../../services/forms.service';
import { SubscribedCardComponent } from '../cards/subscribed-card/subscribed-card.component';
import { DetailsFormComponent } from "../details-form/details-form.component";

@Component({
  selector: 'app-newsletter-subscription-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SubscribedCardComponent,
    DetailsFormComponent
],
  templateUrl: './newsletter-subscription-modal.component.html',
  styleUrl: './newsletter-subscription-modal.component.scss'
})
export class NewsletterSubscriptionModalComponent {
  @ViewChild('closeBtn') closeBtn: ElementRef = new ElementRef('');
  @Output() close = new EventEmitter();
  isNewsLetterOpen = new BehaviorSubject<Boolean>(false);
  isSubscriptionDone = false;
  previousUrl: string = '';
  loading: boolean = false;

  constructor(
    private router: Router,
    private formsService: FormsServices
  ) {}

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.closeBtn.nativeElement.addEventListener('click', () => {
      this.close.emit();
    });
  }
  getFormSubmissionStatus(status: boolean) {
    if (status) {
      this.isSubscriptionDone = status;
        if (this.isSubscriptionDone) {
          setTimeout(() => {
            this.formsService.isFormSubmitted.next(false);
            this.closeNewsletterPopup();
          }, 10000);
        }
    }
  }

  // Ensure to clean up the event listener if needed
  ngOnDestroy(): void {
    if (this.closeBtn) {
      this.closeBtn.nativeElement.removeEventListener('click', this.closeNewsletterPopup.bind(this));
    }
  }

  getPreviousUrl(): void {
    this.router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        this.previousUrl = events[0].urlAfterRedirects;
      });
  }
  closeNewsletterPopup() {
    this.close.emit();
  }
}
