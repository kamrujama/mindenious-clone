import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesCardComponent } from './policies-card.component';

describe('PoliciesCardComponent', () => {
  let component: PoliciesCardComponent;
  let fixture: ComponentFixture<PoliciesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliciesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
