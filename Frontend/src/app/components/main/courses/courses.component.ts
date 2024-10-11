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
import { AccordianComponent } from "../../reusable/accordian/accordian.component";
import { DetailsFormComponent } from '../../reusable/details-form/details-form.component';

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
    ApplicationProcessComponent,
    AccordianComponent,
    DetailsFormComponent
],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
  @ViewChild('couponInputBox') couponInputBox !: ElementRef;
  @ViewChild('phoneInput') phoneInput !: ElementRef;
  @ViewChild('date') currentDateInput !: ElementRef;

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
  isUpiQRCodeVisible: boolean = false;
  isQRCodeVisible: boolean = false;
  isPreFormVisible: boolean = false;

  constructor(
    public navbarService: NavbarService,
    public route: ActivatedRoute,
    private formsService: FormsServices
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentCourseId = Number(params['id']);
      this.courseData = CourseCategoryData.flatMap(item =>
        item.subdomains.filter(subitem => subitem.id === this.currentCourseId)
      );
      if (this.courseData) {
        this.courseModule = this.courseData[0].courseModule;
        this.languages = this.courseData[0].languagesCovered
      }
    });

    this.pricePlans = PricePlans;
  }

  getFormSubmissionStatus(status:boolean) {
    if (status) {
      this.isPreFormVisible = false;
      this.isQRCodeVisible = true;
    }
  }

  openCertificate(url: string) {
    this.certificateUrl = url;
    this.showCertificateModal = true;
  }

  closeCertificateModal() {
    this.showCertificateModal = false;
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
    this.closeUPIContainer();
  }

  showUpiQRCode() {
    this.isUpiQRCodeVisible = true;
    this.isPreFormVisible = true;
  }

  closeUPIContainer() {
    this.isUpiQRCodeVisible = false;
    this.isPreFormVisible = false;
    this.isQRCodeVisible = false;
  }

  updatePaymentMode(mode: string) {
    this.paymentMode = mode;
    this.resetCoupons();
  }

  pay() {
    this.isRedirectedToPaymentPage = true;
    this.closeUPIContainer();
  }

  closeInfoModal(event: any) {
    this.isRedirectedToPaymentPage = false;
    this.resetCoupons();
    this.showPaymentModal = false;
  }
}
