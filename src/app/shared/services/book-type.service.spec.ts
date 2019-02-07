import { TestBed } from '@angular/core/testing';

import { BookTypeService } from './book-type.service';

describe('BookTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookTypeService = TestBed.get(BookTypeService);
    expect(service).toBeTruthy();
  });
});
