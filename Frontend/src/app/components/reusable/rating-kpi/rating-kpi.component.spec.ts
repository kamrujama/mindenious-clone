import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingKpiComponent } from './rating-kpi.component';

describe('RatingKpiComponent', () => {
  let component: RatingKpiComponent;
  let fixture: ComponentFixture<RatingKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingKpiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatingKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
