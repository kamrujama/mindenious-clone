import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsServices } from '../../../services/forms.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './details-form.component.html',
  styleUrl: './details-form.component.scss'
})
export class DetailsFormComponent {
  @Input() isMessageVisible: boolean = false;
  @Input() role: string = '';
  @Output() isFormSubmitted = new EventEmitter<boolean>(false);

  loading: boolean = false;

  constructor(private formsService: FormsServices) { }

  submitFormData(formData: any) {
    formData.value.date = this.formsService.getCurrentDateTime();
    this.formsService.onFormSubmit(formData);
    this.loading = true;
    this.formsService.isSubscribed$.subscribe(res => {
      if (res) {
        this.isFormSubmitted.emit(true);
        this.loading = false;
      }
    })
  }
}
