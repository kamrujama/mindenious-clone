import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = 'http://localhost:3000';
  http = inject(HttpClient);
  userData: any = [{
    name:'',
    email:'',
    password:'',
  }];
  isLoggedIn = false;

  constructor() { }

  signupUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/SignupUser`, userData);
  }

  validateLogin(data: any) {
    this.getUser();
    this.isLoggedIn = this.userData.find((user: any) => user.email === data.email && user.password === data.password);
    if(this.isLoggedIn) {
      sessionStorage.setItem('isLoggedIn', 'true');
    } else {
      sessionStorage.setItem('isLoggedIn', 'false');
    }
    return this.isLoggedIn;
  }

  getUser() {
    this.http.get(`${this.baseUrl}/SignupUser`).subscribe((data) => {
      if (data) {
        this.userData = data;
      }
    });
  }
}
