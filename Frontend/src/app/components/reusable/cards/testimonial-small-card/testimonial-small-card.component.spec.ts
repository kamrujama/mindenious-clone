import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSmallCardComponent } from './testimonial-small-card.component';

describe('TestimonialSmallCardComponent', () => {
  let component: TestimonialSmallCardComponent;
  let fixture: ComponentFixture<TestimonialSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialSmallCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
