import { NgTemplateOutlet } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  @ViewChild('cardRef') currentCardRef: any;
  @ViewChild('dotsRefParent') dotRefParent: any;
  @Input() data: any;
  @Input() cardTemplateRef: any;
  @Input() animationType: any = 'Scale';
  @Output() currentIndexChange = new EventEmitter<number>();

  currentIndex = 0;
  previousIndex: number = 0;
  currentAnimation: string = 'active' + this.animationType;
  ngAfterViewInit() {
    this.currentAnimation = 'active' + this.animationType;
    this.updateActiveDot(this.currentIndex, false);
  }

  next() {
    this.previousIndex = this.currentIndex;
    this.currentIndex++;
    if (this.currentIndex > this.data.length - 1) {
      this.currentIndex = 0;
    }
    this.currentIndexChange.emit(this.currentIndex);
    this.updateCardAnimation();
    this.updateActiveDot(this.currentIndex, false);
  }

  prev() {
    this.previousIndex = this.currentIndex;
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.data.length - 1;
    }
    this.currentIndexChange.emit(this.currentIndex);
    this.updateCardAnimation();
    this.updateActiveDot(this.currentIndex, false);
  }
  updateActiveDot(newIndex:number, isDirectClick:boolean = false) {
    if (isDirectClick) {
      this.previousIndex = this.currentIndex;
      this.dotRefParent.nativeElement.childNodes[this.currentIndex].classList.remove('active');
      this.currentIndex = newIndex;
      this.currentIndexChange.emit(this.currentIndex);
      this.updateCardAnimation();
    } else {
      this.dotRefParent.nativeElement.childNodes[this.previousIndex].classList.remove('active');
    }

    this.dotRefParent.nativeElement.childNodes[newIndex].classList.add('active');
  }

  updateCardAnimation() {
    this.currentCardRef.nativeElement.classList.add(this.currentAnimation);
    setTimeout(() => {
      this.currentCardRef.nativeElement.classList.remove(this.currentAnimation);
    }, 400);
  }
}
