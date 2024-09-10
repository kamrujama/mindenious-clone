import { Component } from '@angular/core';
import { ComboPackOffers } from '../../../../../data';
import { Router } from '@angular/router';
import { NavigateService } from '../../../services/header/navigate.service';

@Component({
  selector: 'app-combo-pack',
  standalone: true,
  imports: [],
  templateUrl: './combo-pack.component.html',
  styleUrl: './combo-pack.component.scss'
})
export class ComboPackComponent {
  comboPackOffer = ComboPackOffers

  constructor(private router: Router, private navigateService: NavigateService) {}
  ngOnInit() {}

  navigateToComboPackDetails(packData:any) {
    this.navigateService.navigateToComboPack('/combo-pack', packData);
  }
}
