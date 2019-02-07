import { TestBed } from '@angular/core/testing';

import { SessionAnalyticsService } from './session-analytics.service';

describe('SessionAnalyticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionAnalyticsService = TestBed.get(SessionAnalyticsService);
    expect(service).toBeTruthy();
  });
});
