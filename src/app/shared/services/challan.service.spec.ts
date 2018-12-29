import { TestBed } from '@angular/core/testing';

import { ChallanService } from './challan.service';

describe('ChallanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChallanService = TestBed.get(ChallanService);
    expect(service).toBeTruthy();
  });
});
