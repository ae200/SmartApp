import { TestBed } from '@angular/core/testing';

import { HistoricalthrillerService } from './historicalthriller.service';

describe('HistoricalthrillerService', () => {
  let service: HistoricalthrillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalthrillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
