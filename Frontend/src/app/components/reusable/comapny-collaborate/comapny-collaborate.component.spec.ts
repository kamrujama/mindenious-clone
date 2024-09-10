import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapnyCollaborateComponent } from './comapny-collaborate.component';

describe('ComapnyCollaborateComponent', () => {
  let component: ComapnyCollaborateComponent;
  let fixture: ComponentFixture<ComapnyCollaborateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComapnyCollaborateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComapnyCollaborateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
