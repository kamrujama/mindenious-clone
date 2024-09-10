import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-accordion',
  standalone: true,
  imports: [],
  templateUrl: './custom-accordion.component.html',
  styleUrl: './custom-accordion.component.scss'
})
export class CustomAccordionComponent {
  @Input() title: string = '';
  @ViewChild('content') content!: ElementRef;
  isExpanded: boolean = false;

  toggle() {
    this.isExpanded = !this.isExpanded;
    this.content.nativeElement.classList.toggle('expanded');
  }
}
