import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountKpiComponent } from './count-kpi.component';

describe('CountKpiComponent', () => {
  let component: CountKpiComponent;
  let fixture: ComponentFixture<CountKpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountKpiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountKpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
