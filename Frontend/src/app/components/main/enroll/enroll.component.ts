import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [],
  templateUrl: './enroll.component.html',
  styleUrl: './enroll.component.scss'
})
export class EnrollComponent {

  isCreditDebitCard: boolean = false;
  isUserLoggedIn: boolean = false;

  auth = inject(AuthenticationService);
  ngOnInit() {
  }
  toggleCreditDebitCard() {
    this.isCreditDebitCard = !this.isCreditDebitCard;
  }
}
