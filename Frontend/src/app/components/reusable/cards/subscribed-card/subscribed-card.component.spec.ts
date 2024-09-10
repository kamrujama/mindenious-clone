import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedCardComponent } from './subscribed-card.component';

describe('SubscribedCardComponent', () => {
  let component: SubscribedCardComponent;
  let fixture: ComponentFixture<SubscribedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscribedCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
