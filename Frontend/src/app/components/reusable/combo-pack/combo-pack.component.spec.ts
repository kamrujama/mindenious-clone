import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboPackComponent } from './combo-pack.component';

describe('ComboPackComponent', () => {
  let component: ComboPackComponent;
  let fixture: ComponentFixture<ComboPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboPackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
