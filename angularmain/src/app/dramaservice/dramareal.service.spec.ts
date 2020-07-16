import { TestBed } from '@angular/core/testing';

import { DramarealService } from './dramareal.service';

describe('DramarealService', () => {
  let service: DramarealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DramarealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
