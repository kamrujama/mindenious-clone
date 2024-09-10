import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject, filter, pairwise } from 'rxjs';
import { FormsServices } from '../../../services/forms.service';
import { SubscribedCardComponent } from '../cards/subscribed-card/subscribed-card.component';

@Component({
  selector: 'app-newsletter-subscription-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    SubscribedCardComponent
  ],
  templateUrl: './newsletter-subscription-modal.component.html',
  styleUrl: './newsletter-subscription-modal.component.scss'
})
export class NewsletterSubscriptionModalComponent {
  @ViewChild('closeBtn') closeBtn: ElementRef = new ElementRef('');
  @Output() close = new EventEmitter();
  // isNewsLetterOpen: boolean = true;
  isNewsLetterOpen = new BehaviorSubject<Boolean>(false);
  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
  });
  spreadSheetUrl = 'https://sheetdb.io/api/v1/r4wct9toxxprc';
  isSubscriptionDone = false;
  previousUrl: string = '';
  loading: boolean = false;

  constructor(
    private router: Router,
    private http: HttpClient,
    private formsService: FormsServices
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],  // Name is required and must be at least 3 characters
      email: ['', [Validators.required, Validators.email]],  // Email is required and must be a valid email format
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],  // Phone is required and must be a 10-digit number
    });
  }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.closeBtn.nativeElement.addEventListener('click', () => {
      this.close.emit();
    });
  }

  // Ensure to clean up the event listener if needed
  ngOnDestroy(): void {
    if (this.closeBtn) {
      this.closeBtn.nativeElement.removeEventListener('click', this.closeNewsletterPopup.bind(this));
    }
  }

  // ngAfterViewInit() {
  // this.closeBtn.nativeElement.addEventListener('click', () => {
  //   this.closeNewsletterPopup();
  // });
  // setTimeout(() => {
  //   this.isNewsLetterOpen = true;
  // }, 30000);
  // }

  subscribe(formData: any) {
    let data = formData;
    this.loading = true;
    this.formsService.onFormSubmit(data);
    this.formsService.isSubscribed$.subscribe(res => {
      if (res) {
        this.isSubscriptionDone = res;
        this.loading = false;
        if (this.isSubscriptionDone) {
          setTimeout(() => {
            this.formsService.isFormSubmitted.next(false);
            this.closeNewsletterPopup();
          }, 10000);
        }
      }
    });
  }

  getPreviousUrl(): void {
    this.router.events
      .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
      .subscribe((events: RoutesRecognized[]) => {
        this.previousUrl = events[0].urlAfterRedirects;
      });
  }
  closeNewsletterPopup() {
    // this.isNewsLetterOpen = false;
    // this.isSubscriptionDone = false;
    this.close.emit();
    // this.router.navigateByUrl('/');
  }
}
