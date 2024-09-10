import { Component, ElementRef, ViewChild } from '@angular/core';
// import { ServiceCardComponent } from '../../reusable/service-card/service-card.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { FormsServices } from '../../../services/forms.service';
import { ModalPopupComponent } from '../../reusable/modal-popup/modal-popup.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ModalPopupComponent,
    NgOptimizedImage
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @ViewChild('phoneInput') phoneInput !:ElementRef;
  // howWeWork = [
  //   {
  //     title: "Freedom and Flexibiliity",
  //     description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
  //     icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
  //     show: false,
  //     borderRadius: '30% 70% 70% 30% / 29% 31% 69% 71%'
  //   },
  //   {
  //     title: "Diversity, inclusion and belongings",
  //     description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
  //     icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
  //     show: false,
  //     borderRadius: '77% 23% 19% 81% / 70% 50% 50% 30%'
  //   },
  //   {
  //     title: "How we provide service",
  //     description: "All brands/kinds of vaccinations are available every day for all age groups. Vaccination booklet available. Missed vaccine counselling and catch up vaccination done.",
  //     icon: "https://framerusercontent.com/images/IVYgTYnwAKMBJvizACEbYRYAQ.png?scale-down-to=512",
  //     show: false,
  //     borderRadius: '0% 100% 21% 79% / 26% 72% 28% 74% '
  //   },

  // ]
  isFormSubmitted = false;
  loading: boolean = false;
  isFormInvalid: boolean = false;
  isValidPhone:boolean = false;
  invalidErrorMessage = "Sorry!!! Please fill the form details properly to subscribe our news letter"

  constructor(protected formsService: FormsServices) {}
  ngOnInit() {}

  contactUs(formData: NgForm) {
    let { name, email, phone } = formData.value;
    if (name && email && phone) {
      this.isFormInvalid = false
      this.formsService.onFormSubmit(formData);
      this.loading = true;
      this.formsService.isSubscribed$.subscribe(res => {
        if(res) {
          this.formsService.isFormSubmitted.next(false);
          this.isFormSubmitted = true;
          this.loading = false;
        }
      })
    } else {
     this.isFormInvalid = true;
     setTimeout(() => {
       this.isFormInvalid = false;
     }, 3000);
    }
  }
}
