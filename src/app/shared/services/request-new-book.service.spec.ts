import { TestBed } from '@angular/core/testing';

import { RequestNewBookService } from './request-new-book.service';

describe('RequestNewBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestNewBookService = TestBed.get(RequestNewBookService);
    expect(service).toBeTruthy();
  });
});
