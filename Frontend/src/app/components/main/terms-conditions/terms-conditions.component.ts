import { Component } from '@angular/core';
import { ContentArticleComponent } from '../../reusable/content-article/content-article.component';

@Component({
  selector: 'app-terms-conditions',
  standalone: true,
  imports: [
    ContentArticleComponent
  ],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {
  termsAndConditions = [
      {
        title: "Terms and Conditions",
        content: "Welcome to our website. By accessing this site, you agree to comply with the following Terms and Conditions. The terms 'We,' 'Us,' 'Our,' or 'Company' refer to Institution 1, while 'Visitor' or 'User' refers to individuals accessing this website. Please review these Terms and Conditions carefully. If you do not agree with any part of these terms, we kindly ask you to refrain from using this site. The business, its divisions, subsidiaries, associate companies, or other affiliated entities, whether domestic or international, reserve the right to amend these Terms and Conditions at any time by updating this page. It is your responsibility to periodically review this page to remain informed of any changes, as these terms are binding for all users of the website."
      },
      {
        title: "Use of Content",
        content: "All logos, brands, marks, headings, labels, names, signatures, numerals, shapes, or any combinations thereof, displayed on this site, unless otherwise noted, are the property of the business or its associated entities, either owned or used under license. Unauthorized use of these properties or any other content on this site, except as provided in these terms and conditions or in the site content, is strictly prohibited. You may not sell, modify, reproduce, display, publicly perform, distribute, or otherwise use the materials for any public or commercial purpose without written permission from the respective organization or entity."
      },
      {
        title: "Acceptable Website Use",
        content: "(A) Security Rules: Visitors are prohibited from violating or attempting to violate the security of the website, including accessing data not intended for the user, attempting to probe, scan, or test system vulnerabilities, interfering with service to any user, host, or network, or sending unsolicited electronic mail. Violations may result in civil or criminal liability, and the business reserves the right to investigate and involve law enforcement authorities. (B) General Rules: Visitors may not use the website to transmit, distribute, store, or destroy material that could encourage illegal conduct, infringe intellectual property rights, or contain offensive content."
      },
      {
        title: "Indemnity",
        content: "Users agree to indemnify and hold harmless the Company, its officers, directors, employees, and agents from any claims, actions, liabilities, losses, or damages arising from their use of the website or breach of these terms."
      },
      {
        title: "Liability",
        content: "Users acknowledge that neither the Company nor its group companies, directors, officers, or employees shall be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use of the service, including but not limited to loss of profits or data. The Company shall not be liable for damages arising from interruption, suspension, or termination of service or for the statements or conduct of any third party."
      },
      {
        title: "Disclaimer of Consequential Damages",
        content: "In no event shall the Company or any associated parties be liable for any damages resulting from the use or inability to use the website, including incidental and consequential damages, regardless of whether such damages were advised or foreseeable."
      }
    ]
}
