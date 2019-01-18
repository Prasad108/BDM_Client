import { TestBed } from '@angular/core/testing';

import { InventryService } from './inventry.service';

describe('InventryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventryService = TestBed.get(InventryService);
    expect(service).toBeTruthy();
  });
});
