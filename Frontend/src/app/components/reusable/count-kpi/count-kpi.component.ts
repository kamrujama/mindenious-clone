import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-kpi',
  standalone: true,
  imports: [],
  templateUrl: './count-kpi.component.html',
  styleUrl: './count-kpi.component.scss'
})
export class CountKpiComponent {
  @Input() count: number = 0;
  @Input() title: string = 'Projects';
  @Input() duration: string = '7 Days';
  @Input() icon:string = 'https://d1vwxdpzbgdqj.cloudfront.net/aiml-pp-new/search-icon.svg';
  @Input() iconBgColor:string = '#00c48c';
  @Input() height:number = 0;
  @Input() width:number = 0;
}
