import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCourseListsComponent } from './trending-course-lists.component';

describe('TrendingCourseListsComponent', () => {
  let component: TrendingCourseListsComponent;
  let fixture: ComponentFixture<TrendingCourseListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingCourseListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingCourseListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
