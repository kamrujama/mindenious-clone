import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormsServices {
  scriptURL = 'https://script.google.com/macros/s/AKfycbzKuPFu1O-xWkqP0iq3ErxGzZEW_NhTXyo5pFbtqDptCkb2nCIvoq3_EnV8z42oc4fTHw/exec';
  isFormSubmitted = new BehaviorSubject<boolean>(false);
  isSubscribed$ = this.isFormSubmitted.asObservable();
  isSubscribed = false;

  constructor(private http: HttpClient) { }

  ngOnDestroy() {
    this.isFormSubmitted.unsubscribe();
  }
  onFormSubmit(form: any) {
    if (form.valid) {
      const formData = new FormData();

      for (const key in form.value) {
        if (form.value.hasOwnProperty(key)) {
          formData.append(key, form.value[key]);
        }
      }

      this.http.post(this.scriptURL, formData).subscribe(
        () => {
          form.resetForm(); // Reset the form
          this.isFormSubmitted.next(true);
        },
        error => {
          console.error('Error!', error.message);
        }
      );
    }
  }

  validatePhoneNumber(phoneNumber:string) {
    if (phoneNumber.replace(/\s/g, "").length !== 10) return false;
    return true;
  }
}
