import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPackEnrollComponent } from './combo-pack-enroll.component';

describe('ComboPackEnrollComponent', () => {
  let component: ComboPackEnrollComponent;
  let fixture: ComponentFixture<ComboPackEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboPackEnrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboPackEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
