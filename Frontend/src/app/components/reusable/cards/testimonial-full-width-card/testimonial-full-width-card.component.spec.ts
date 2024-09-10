import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialFullWidthCardComponent } from './testimonial-full-width-card.component';

describe('TestimonialFullWidthCardComponent', () => {
  let component: TestimonialFullWidthCardComponent;
  let fixture: ComponentFixture<TestimonialFullWidthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialFullWidthCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialFullWidthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
