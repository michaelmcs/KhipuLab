import { TestBed } from '@angular/core/testing';

import { LabSampleService } from './lab-sample.service';

describe('LabSampleService', () => {
  let service: LabSampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabSampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
