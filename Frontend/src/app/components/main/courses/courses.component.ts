import { Component, ElementRef, Input, NgModule, ViewChild, inject } from '@angular/core';
import { NavbarService } from '../../../services/header/navbar.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { CountKpiComponent } from '../../reusable/count-kpi/count-kpi.component';
import { AlumniComponent } from '../../reusable/alumni/alumni.component';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CertificateUrls, CourseCategoryData, IndustrySupport, PricePlans } from '../../../../../data';
import { EnrollComponent } from '../enroll/enroll.component';
import { ModalPopupComponent } from '../../reusable/modal-popup/modal-popup.component';
import { LoaderComponent } from '../../reusable/loaders/loader/loader.component';
import { FormsServices } from '../../../services/forms.service';
import { MentorsCardComponent } from '../../reusable/cards/mentors-card/mentors-card.component';
import { CareerReviewsComponent } from '../../reusable/career-reviews/career-reviews.component';
import { NgOptimizedImage } from '@angular/common';
import { ApplicationProcessComponent } from '../../reusable/application-process/application-process.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatTabsModule,
    CountKpiComponent,
    AlumniComponent,
    EnrollComponent,
    ModalPopupComponent,
    ReactiveFormsModule,
    FormsModule,
    LoaderComponent,
    MentorsCardComponent,
    CareerReviewsComponent,
    NgOptimizedImage,
    ApplicationProcessComponent
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
  @ViewChild('couponInputBox') couponInputBox !: ElementRef;
  @ViewChild('phoneInput') phoneInput !: ElementRef;

  featuresList = [
    'Life time access',
    'Live Mentorship by Experts',
    'Training Completion Certificate',
    'Internship Completion Certificate',
    '20+ hours of Live Classes',
    '2 MNCs based Live projects (Industrial projects)',
    'Weekly quiz, tests and assignments',
  ]

  certificatesData = CertificateUrls;

  industrySupport = IndustrySupport;
  pricePlans: any[] = [];
  languages: any[] = [];
  currentCourseId: number = 1;
  courseData: any[] = []

  router = inject(Router);
  showPaymentModal: boolean = false;
  paymentMode: string = 'partial';
  paymentType: {
    'partial':string,
    preRegistrationPaymentLink: string,
    'full': string,
    discountedPaymentLink: string,
    fullPaymentLink: string
  } = {
      partial: '',
      full: '',
      discountedPaymentLink: '',
      preRegistrationPaymentLink: '',
      fullPaymentLink: ''
    };

  isCouponUsed: boolean = false;
  isCouponApplied: boolean = false;
  priceAfterCouponApplied: number = 0;
  courseModule: any;
  showCouponAlert: boolean = false;

  // form details
  formBuilder = inject(FormBuilder);
  fullSyllabusFormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
  })
  isRedirectedToPaymentPage: boolean = false;
  loading: boolean = false;
  showAlertModal: boolean = false;
  isValidPhone: boolean = false;
  showCertificateModal: boolean = false;
  certificateUrl: string = '';

  constructor(
    public navbarService: NavbarService,
    public route: ActivatedRoute,
    private formsService: FormsServices
  ) { }

  ngOnInit() {
    debugger;
    this.route.params.subscribe(params => {
      const courseName = params['courseName'];
      this.courseData = CourseCategoryData.flatMap(item =>
        item.subdomains.filter(subitem => subitem.courseName === courseName.split('-').join(' '))
      );
      if (this.courseData) {
        this.courseModule = this.courseData[0].courseModule;
        this.languages = this.courseData[0].languagesCovered
      }
    });

    this.pricePlans = PricePlans;
  }

  openCertificate(url: string) {
    this.certificateUrl = url;
    this.showCertificateModal = true;
  }

  closeCertificateModal() {
    this.showCertificateModal = false;
  }

  submitFormData(formData: NgForm) {
    let { name, phone } = formData.value;
    this.isValidPhone = this.formsService.validatePhoneNumber(phone);

    if (!this.isValidPhone) {
      this.phoneInput.nativeElement.focus();
      return;
    }

    if (name && phone) {
      this.formsService.onFormSubmit(formData);
      this.loading = true;
      this.formsService.isSubscribed$.subscribe(res => {
        if (res) {
          this.formsService.isFormSubmitted.next(false);
          this.loading = false;
          this.downloadSyllabusPdf();
        }
      })
    } else {
      this.showAlertModal = true;
      setTimeout(() => {
        this.showAlertModal = false;
      }, 3000)
    }
  }

  downloadSyllabusPdf() {
    let a = document.createElement('a');
    a.href = this.courseData[0].pdfLink;
    a.download = 'Syllabus.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  enrollNow(price:{
    'partial':string,
    preRegistrationPaymentLink: string,
    'full': string,
    discountedPaymentLink: string,
    fullPaymentLink: string
  }) {
    this.showPaymentModal = true;
    this.paymentType = price;
  }

  useCoupon() {
    this.couponInputBox.nativeElement.value = 'MIND30';
    this.isCouponUsed = true;
  }

  applyCoupon() {
    if (this.couponInputBox.nativeElement.value.toUpperCase() !== 'MIND30') {
      this.showCouponAlert = true;
      setTimeout(() => {
        this.showCouponAlert = false;
      }, 3000);
    } else {
      this.priceAfterCouponApplied = Math.floor(+this.paymentType.full - (+this.paymentType.full * 0.30));
      sessionStorage.setItem('couponApplied', 'true');
      this.isCouponApplied = true;
      this.showCouponAlert = false;
    }
  }

  resetCoupons() {
    this.isCouponApplied = false;
    this.isCouponUsed = false;
    this.priceAfterCouponApplied = 0;
    sessionStorage.removeItem('couponApplied');
  }
  closePaymentModal() {
    this.showPaymentModal = false;
    this.paymentMode = 'partial';
    this.resetCoupons();
  }

  updatePaymentMode(mode: string) {
    this.paymentMode = mode;
    this.resetCoupons();
  }

  pay() {
    this.isRedirectedToPaymentPage = true;
  }

  closeInfoModal(event: any) {
    this.isRedirectedToPaymentPage = false;
    this.resetCoupons();
    this.showPaymentModal = false;
  }
}
