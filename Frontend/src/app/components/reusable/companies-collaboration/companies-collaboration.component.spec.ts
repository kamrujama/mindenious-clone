import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesCollaborationComponent } from './companies-collaboration.component';

describe('CompaniesCollaborationComponent', () => {
  let component: CompaniesCollaborationComponent;
  let fixture: ComponentFixture<CompaniesCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompaniesCollaborationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompaniesCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
