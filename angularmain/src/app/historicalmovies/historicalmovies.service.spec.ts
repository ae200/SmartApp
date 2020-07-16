import { TestBed } from '@angular/core/testing';

import { HistoricalmoviesService } from './historicalmovies.service';

describe('HistoricalmoviesService', () => {
  let service: HistoricalmoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricalmoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
