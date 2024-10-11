import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentOpeningDetails } from '../../../../../../data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsServices } from '../../../../services/forms.service';
import { ModalPopupComponent } from '../../../reusable/modal-popup/modal-popup.component';

@Component({
  selector: 'app-opening-details',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ModalPopupComponent
  ],
  templateUrl: './opening-details.component.html',
  styleUrl: './opening-details.component.scss'
})
export class OpeningDetailsComponent {
  openingDetailsData:any;
  currentOpeningData = CurrentOpeningDetails;
  loading: boolean = false;
  isFormSubmitted: boolean = false;

  constructor(private route: ActivatedRoute, private formsService: FormsServices) {}

  ngOnInit() {
   this.route.params.subscribe(param => {
     const paramId = Number(param['id']);
     this.openingDetailsData = this.currentOpeningData.filter(data => data.id === paramId)[0];
   })
  }

  applyNow(formData: any) {
    formData.value.date = this.formsService.getCurrentDateTime();
    this.formsService.onFormSubmit(formData);
    this.loading = true;
    this.formsService.isSubscribed$.subscribe(res => {
      if(res) {
        this.formsService.isFormSubmitted.next(false);
        this.isFormSubmitted = true;
        this.loading = false;
      }
    })
  }
}
