import { Component } from '@angular/core';
import { ContentArticleComponent } from '../../reusable/content-article/content-article.component';

@Component({
  selector: 'app-return-policy',
  standalone: true,
  imports: [
    ContentArticleComponent
  ],
  templateUrl: './return-policy.component.html',
  styleUrl: './return-policy.component.scss'
})
export class ReturnPolicyComponent {
  returnPolicy = [
    {
      title: 'Payment Terms',
      content: `The Platform operates as a paid service, with users making payments according to their selected plans via the Platform. By using the Platform, you explicitly agree to pay the fees associated with the courses or plans you choose, thereby authorizing the Company to charge your selected payment method. All payments are processed through mechanisms established by the Company. It is your responsibility to ensure the prompt payment of all fees and applicable taxes in accordance with your chosen plan. The Platform offers various payment options, including but not limited to, card payments, online bank transfers, and wallet payments. These payment gateways operate under the terms and conditions outlined by third-party providers, as stipulated on the Platform, and users are bound by these conditions. Valid credit/debit cards, online bank transfers, and other payment instruments are processed via a payment gateway or suitable payment infrastructure, governed by agreements between users and their respective issuing banks and payment instrument providers. The Company assumes no liability for any unauthorized use, fraudulent activities, payment refunds, or lost amounts during transactions. Refunds are not provided for workshops conducted. The Company reserves the right to alter fees at its discretion, with any changes becoming effective immediately upon posting or notification on our website.`
    },
    {
      title: 'Return Policy',
      content: `The Platform operates as a paid service, with payments made by users in accordance with selected plans. Mindenious does not offer refunds for its courses; once payments are made, they are final and not subject to cancellation or refund. Users are advised to thoroughly review course information before proceeding with payment. Acceptance of the no-refund policy and other terms and conditions outlined on the website/platforms is implied upon making payments.`
    },
  ]
}
