import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerReviewsComponent } from './career-reviews.component';

describe('CareerReviewsComponent', () => {
  let component: CareerReviewsComponent;
  let fixture: ComponentFixture<CareerReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerReviewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
