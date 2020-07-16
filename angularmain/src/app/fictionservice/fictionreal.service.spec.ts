import { TestBed } from '@angular/core/testing';

import { FictionrealService } from './fictionreal.service';

describe('FictionrealService', () => {
  let service: FictionrealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FictionrealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
