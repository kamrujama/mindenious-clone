import { Component } from '@angular/core';
import { NavigateService } from '../../../services/header/navigate.service';
import { CurrentOpeningDetails } from '../../../../../data';

@Component({
  selector: 'app-current-openings',
  standalone: true,
  imports: [],
  templateUrl: './current-openings.component.html',
  styleUrl: './current-openings.component.scss'
})
export class CurrentOpeningsComponent {
  currentOpeningDetails = CurrentOpeningDetails;
  constructor(private navigateService: NavigateService) {}

  ngOnInit() {}

  // current-opening/details/:id
  navigateToOpeningDetails(id:number) {
    this.navigateService.navigateToOpening('current-opening/details', id);
  }
}
