import { TestBed } from '@angular/core/testing';

import { BookLanguageService } from './book-language.service';

describe('BookLanguageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookLanguageService = TestBed.get(BookLanguageService);
    expect(service).toBeTruthy();
  });
});
