import { TestBed } from '@angular/core/testing';

import { TraceEventService } from './trace-event.service';

describe('TraceEventService', () => {
  let service: TraceEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraceEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
