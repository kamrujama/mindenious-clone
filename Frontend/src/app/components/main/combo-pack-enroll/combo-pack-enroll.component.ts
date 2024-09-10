import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NavigateService } from '../../../services/header/navigate.service';
import { ComboPackOffers } from '../../../../../data';
import { AccordianComponent } from '../../reusable/accordian/accordian.component';
import { TrendingCourseListsComponent } from '../../reusable/trending-course-lists/trending-course-lists.component';
import { WhyChooseUsComponent } from '../../reusable/why-choose-us/why-choose-us.component';
import { NgOptimizedImage } from '@angular/common';
import { ModalPopupComponent } from '../../reusable/modal-popup/modal-popup.component';

@Component({
  selector: 'app-combo-pack-enroll',
  standalone: true,
  imports: [
    AccordianComponent,
    TrendingCourseListsComponent,
    WhyChooseUsComponent,
    NgOptimizedImage,
    ModalPopupComponent
  ],
  templateUrl: './combo-pack-enroll.component.html',
  styleUrl: './combo-pack-enroll.component.scss'
})
export class ComboPackEnrollComponent {
  comboPackData:any;
  isEnrolled: boolean = false;
  isPreRegistrationSelected: boolean = true;

  constructor(private route: ActivatedRoute, private navigateService: NavigateService) {}

  ngOnInit() {
    this.route.params.subscribe((param) => {
      const paramId = Number(param['id']); // Get the current course ID from route parameters
      this.comboPackData = ComboPackOffers.filter(item =>
        item.id == paramId
      );
      this.comboPackData = this.comboPackData[0];
    })
  }

  redirectToCourse(id:any) {
    this.navigateService.navigateToCourse('/course', id)
  }

  enrollNow() {
    this.isEnrolled = true;
    if (this.isPreRegistrationSelected) {
      window.open(this.comboPackData?.preRegistrationPaymentLink, '_blank');
    } else {
       window.open(this.comboPackData?.fullPaymentLink, '_blank');
     }
  }

  updatePaymentMode(paymentMode:string) {
    this.isPreRegistrationSelected = paymentMode === 'pre';
  }
}
