import { TestBed } from '@angular/core/testing';

import { ShairedService } from './shaired.service';

describe('ShairedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShairedService = TestBed.get(ShairedService);
    expect(service).toBeTruthy();
  });
});
