import { Component, inject } from '@angular/core';
import { NavbarService } from '../../../services/header/navbar.service';
import { FormBuilder, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  isSignup = false;
  isLogin = true;
  formBuild = inject(FormBuilder);

  signupForm = this.formBuild.group({
    username: '',
    email: '',
    password: ''
  })

  loginForm = this.formBuild.group({
    username: '',
    password: ''
  })

  service = inject(NavbarService);
  auth = inject(AuthenticationService);

  ngOnInit() {

  }
  toggleLogin() {
    this.isSignup = false;
    this.isLogin = true;
  }

  toggleSignup() {
    this.isSignup = true;
    this.isLogin = false;
  }

  validateLogin() {
    let values = this.loginForm.value;
    this.auth.validateLogin(values);
  }

  validateSignup() {
    let values = this.signupForm.value;

    console.log(values);
    this.auth.signupUser(values).subscribe((data) => {
      console.log(data);
      this.service.navigateTo('/enroll');
    })
  }
}
