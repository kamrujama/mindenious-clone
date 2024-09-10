import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsCardComponent } from './mentors-card.component';

describe('MentorsCardComponent', () => {
  let component: MentorsCardComponent;
  let fixture: ComponentFixture<MentorsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MentorsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
