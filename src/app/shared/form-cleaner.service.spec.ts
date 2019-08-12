import { TestBed } from '@angular/core/testing';

import { FormCleanerService } from './form-cleaner.service';

describe('FormCleanerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [FormCleanerService]
  }));

  it('should be created', () => {
    const service: FormCleanerService = TestBed.get(FormCleanerService);
    expect(service).toBeTruthy();
  });
});
