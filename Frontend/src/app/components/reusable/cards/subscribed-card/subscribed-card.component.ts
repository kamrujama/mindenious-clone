import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribed-card',
  standalone: true,
  imports: [],
  templateUrl: './subscribed-card.component.html',
  styleUrl: './subscribed-card.component.scss'
})
export class SubscribedCardComponent {
  imgSrc = '/assets/images/thanks.gif';
  title = "Thanks for subscribing!";
  description = "We will send you updates via email."
}
