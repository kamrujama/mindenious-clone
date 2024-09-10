import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpeningsComponent } from './current-openings.component';

describe('CurrentOpeningsComponent', () => {
  let component: CurrentOpeningsComponent;
  let fixture: ComponentFixture<CurrentOpeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentOpeningsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
