import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationProcessComponent } from './application-process.component';

describe('ApplicationProcessComponent', () => {
  let component: ApplicationProcessComponent;
  let fixture: ComponentFixture<ApplicationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationProcessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
