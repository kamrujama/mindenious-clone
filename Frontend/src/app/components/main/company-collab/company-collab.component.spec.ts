import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCollabComponent } from './company-collab.component';

describe('CompanyCollabComponent', () => {
  let component: CompanyCollabComponent;
  let fixture: ComponentFixture<CompanyCollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyCollabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyCollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
