import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSubscriptionModalComponent } from './newsletter-subscription-modal.component';

describe('NewsletterSubscriptionModalComponent', () => {
  let component: NewsletterSubscriptionModalComponent;
  let fixture: ComponentFixture<NewsletterSubscriptionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterSubscriptionModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsletterSubscriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
