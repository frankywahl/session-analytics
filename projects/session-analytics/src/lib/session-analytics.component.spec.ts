import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAnalyticsComponent } from './session-analytics.component';

describe('SessionAnalyticsComponent', () => {
  let component: SessionAnalyticsComponent;
  let fixture: ComponentFixture<SessionAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
