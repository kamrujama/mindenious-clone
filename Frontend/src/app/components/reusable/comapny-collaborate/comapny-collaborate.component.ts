import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comapny-collaborate',
  standalone: true,
  imports: [],
  templateUrl: './comapny-collaborate.component.html',
  styleUrl: './comapny-collaborate.component.scss'
})
export class ComapnyCollaborateComponent {
  @Input() universities = [
    { name: "MIT IDSS", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/mit-idss.png" },
    { name: "Wharton", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/wharton.png" },
    { name: "Stanford", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/stanford-1.png" },
    { name: "MIT", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/mit.png" },
    { name: "Texas", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/texas.png" },
    { name: "Northwestern", url: "https://d1vwxdpzbgdqj.cloudfront.net/images/intl-homepage/university/northwestern.png" }
  ];

  @Input() imgHeight = "48";
  @Input() imgWidth = "160";

  ngOnInit() {}
}
