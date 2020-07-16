import { TestBed } from '@angular/core/testing';

import { HistoricalrealService } from './historicalreal.service';

describe('HistoricalrealService', () => {
  let service: HistoricalrealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalrealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
