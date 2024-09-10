import { Component, inject, PlatformRef } from '@angular/core';
import { SignalService } from '../../../services/signal.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-company-collab',
  standalone: true,
  imports: [
  ],
  templateUrl: './company-collab.component.html',
  styleUrl: './company-collab.component.scss',
  providers: [BrowserModule]
})
export class CompanyCollabComponent {
  signalService = inject(SignalService);
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
      title: 'VRZ Helperz',
      logo: 'assets/images/companyCollab/vrz.png'
    },
  ]
  ngOnInit() {
  }

  closeModal() {
    this.signalService.isCompanyCollabOpen.set(false);
  }

}
