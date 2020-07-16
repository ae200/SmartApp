import { TestBed } from '@angular/core/testing';

import { FictionthrillerService } from './fictionthriller.service';

describe('FictionthrillerService', () => {
  let service: FictionthrillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FictionthrillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
