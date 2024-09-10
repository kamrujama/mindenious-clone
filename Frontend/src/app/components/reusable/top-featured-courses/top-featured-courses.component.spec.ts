import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFeaturedCoursesComponent } from './top-featured-courses.component';

describe('TopFeaturedCoursesComponent', () => {
  let component: TopFeaturedCoursesComponent;
  let fixture: ComponentFixture<TopFeaturedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopFeaturedCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopFeaturedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
