import { TestBed, async, inject } from '@angular/core/testing';

import { EditChallanGuard } from './edit-challan.guard';

describe('EditChallanGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditChallanGuard]
    });
  });

  it('should ...', inject([EditChallanGuard], (guard: EditChallanGuard) => {
    expect(guard).toBeTruthy();
  }));
});
