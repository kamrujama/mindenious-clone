import { Component } from '@angular/core';
import { FormsServices } from '../../../services/forms.service';
import { ModalPopupComponent } from '../../reusable/modal-popup/modal-popup.component';
import { NgOptimizedImage } from '@angular/common';
import { DetailsFormComponent } from "../../reusable/details-form/details-form.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ModalPopupComponent,
    NgOptimizedImage,
    DetailsFormComponent
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  isFormSubmitted = false;

  constructor(protected formsService: FormsServices) {}
  ngOnInit() {}

  getFormSubmissionStatus(status: boolean) {
    if (status) {
      this.isFormSubmitted = true;
    }
  }
}
