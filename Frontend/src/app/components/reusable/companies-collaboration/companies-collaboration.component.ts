import { Component } from '@angular/core';

@Component({
  selector: 'app-companies-collaboration',
  standalone: true,
  imports: [],
  templateUrl: './companies-collaboration.component.html',
  styleUrl: './companies-collaboration.component.scss'
})
export class CompaniesCollaborationComponent {
  collabLogo = [
    {
      title: 'Goverment of India',
      logo: 'assets/images/companyCollab/gov.png'
    },
    {
      title: 'MSME',
      logo: 'assets/images/companyCollab/msme.png'
    },
    {
      title: 'ISO',
      logo: 'assets/images/companyCollab/iso.png'
    },
    {
      title: 'Wipro',
      logo: 'assets/images/companyCollab/wiproMainLogo.png'
    },
    {
      title: 'VRZ Helperz',
      logo: 'assets/images/companyCollab/vrz.png'
    },
  ]
}
