import { Component } from '@angular/core';
import { ContentArticleComponent } from '../../reusable/content-article/content-article.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    ContentArticleComponent
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  privacyPolicy = [
      {
        title: "Introduction",
        content: "This Privacy Policy constitutes an electronic record, established in accordance with the Information Technology Act, 2000, and its associated regulations, governing electronic documents and records. It is a legally binding agreement between users (\"You\" / \"Your\" / \"Yourself\") and the company (\"We\" / \"Us\" / \"Our\" / \"Company\"). Your acceptance of this Privacy Policy, whether by direct or indirect means (such as clicking on the \"I accept\" tab or using the website), signifies the commencement of a binding relationship between you and the company concerning your utilization of the website (\"Website\"). By using the Website, you acknowledge your understanding, agreement, and consent to the terms outlined in this Privacy Policy. If you disagree with any provision of this policy, please refrain from using the Website. By providing us with your Information or utilizing the Website's facilities, you consent to the collection, storage, processing, and transfer of your Personal Information and Non-Personal Information in accordance with this Privacy Policy. You affirm that such actions will not result in any loss or wrongful gain to yourself or any other individual."
      },
      {
        title: "User Information",
        content: "To access specific services on our websites, users are required to furnish certain information during the registration process, including but not limited to: name, email address, gender, age, PIN code, credit card or debit card details, medical records, and history. The information provided enables us to enhance our services and deliver a user-friendly experience. All user information collected is service-dependent and may be utilized for maintaining, protecting, and improving our services, including advertising services, as well as for developing new services. Information deemed sensitive will not be considered as such if it is freely accessible in the public domain or furnished under applicable law."
      },
      {
        title: "Cookies",
        content: "To improve the responsiveness of the sites for our users, we may use \"cookies\", or similar electronic tools to collect information to assign each visitor a unique, random number as a User Identification (User ID) to understand the user’s individual interests using the Identified Computer. Unless you voluntarily identify yourself (through registration, for example), we will have no way of knowing who you are, even if we assign a cookie to your computer. The only personal information a cookie can contain is information you supply (an example of this is when you ask for our Personalized Horoscope). A cookie cannot read data off your hard drive. Our advertisers may also assign their own cookies to your browser (if you click on their ads), a process that we do not control. Our web servers automatically collect limited information about your computer’s connection to the Internet, including your IP address, when you visit our site. (Your IP address is a number that lets computers attached to the Internet know where to send you data — such as the web pages you view.) Your IP address does not identify you personally. We use this information to deliver our web pages to you upon request, to tailor our site to the interests of our users, to measure traffic within our site and let advertisers know the geographic locations from where our visitors come."
      },
      {
        title: "Information Sharing",
        content: "We share sensitive personal information with third parties without obtaining the prior consent of the user in the following limited circumstances: (a) When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offenses. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing these Terms; for complying with the applicable laws and regulations. (b) We propose to share such information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. We also ensure that these recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures."
      },
      {
        title: "Information Security",
        content: "We take appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data. These include internal reviews of our data collection, storage, and processing practices and security measures, including appropriate encryption and physical security measures to guard against unauthorized access to systems where we store personal data. All information gathered on our Website is securely stored within our controlled database. The database is stored on servers secured behind a firewall; access to the servers is password-protected and is strictly limited. However, as effective as our security measures are, no security system is impenetrable. We cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. And, of course, any information you include in a posting to the discussion areas is available to anyone with Internet access. However, the internet is an ever-evolving medium. We may change our Privacy Policy from time to time to incorporate necessary future changes. Of course, our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be."
      },
      {
        title: "Policy Updates",
        content: "As the internet landscape evolves, our Privacy Policy may be subject to periodic revisions to incorporate necessary changes. Any information gathered will always be handled in accordance with the policy under which it was collected."
      }
    ]
}
