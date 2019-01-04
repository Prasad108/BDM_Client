import { TestBed } from '@angular/core/testing';

import { CbDetailsService } from './cb-details.service';

describe('CbDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CbDetailsService = TestBed.get(CbDetailsService);
    expect(service).toBeTruthy();
  });
});
