import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-auto-slider',
  standalone: true,
  imports: [],
  templateUrl: './alumni.component.html',
  styleUrl: './alumni.component.scss'
})
export class AlumniComponent {

  @Input() title = "Our Alumni Works At";
  @Input() imgUrls = [
    {url:'https://yhills.com/wp-content/uploads/2023/12/Tiger-analytics-logo-removebg-preview-1-300x300.png'},
    {url:'https://yhills.com/wp-content/uploads/2023/12/Microsoft__1_-removebg-preview-1-300x300.png'},
    {url:'https://yhills.com/wp-content/uploads/2023/12/oracle-logo-1-removebg-preview-1-300x200.png'},
    {url:'https://yhills.com/wp-content/uploads/2023/12/Amazon-logo-removebg-preview-1-300x149.png'},
    {url:'https://yhills.com/wp-content/uploads/2023/12/Walmart-logo-1-scaled-removebg-preview-1-300x110.png'},
    {url:'https://yhills.com/wp-content/uploads/2024/01/20220927102358_hcltech-copy-CUS-removebg-preview-300x200.png'},
    {url:'https://yhills.com/wp-content/uploads/2023/12/Tiger-analytics-logo-removebg-preview-1-300x300.png'},
    {url:'https://yhills.com/wp-content/uploads/2023/12/Microsoft__1_-removebg-preview-1-300x300.png'},
    {url:'https://yhills.com/wp-content/uploads/2023/12/oracle-logo-1-removebg-preview-1-300x200.png'},
    {url:'https://yhills.com/wp-content/uploads/2023/12/Amazon-logo-removebg-preview-1-300x149.png'},
    {url:'https://yhills.com/wp-content/uploads/2023/12/Walmart-logo-1-scaled-removebg-preview-1-300x110.png'},
    {url:'https://yhills.com/wp-content/uploads/2024/01/20220927102358_hcltech-copy-CUS-removebg-preview-300x200.png'},
  ]
}
