import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCourseBarComponent } from './trending-course-bar.component';

describe('TrendingCourseBarComponent', () => {
  let component: TrendingCourseBarComponent;
  let fixture: ComponentFixture<TrendingCourseBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingCourseBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingCourseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
