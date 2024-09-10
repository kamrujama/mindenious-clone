import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { NavigateService } from '../../../services/header/navigate.service';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [
    MatExpansionModule
  ],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss'
})
export class AccordianComponent {
  @Input() accordionData: any = [{
      module: '',
      subTitle: [''],
  }]

  constructor(private navigateService: NavigateService) {}

  ngOnInit() {}

  redirectToCourse(id:any) {
    this.navigateService.navigateToCourse('/course', id)
  }
}
