import { TestBed } from '@angular/core/testing';

import { BookNameService } from './book-name.service';

describe('BookNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookNameService = TestBed.get(BookNameService);
    expect(service).toBeTruthy();
  });
});
