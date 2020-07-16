import { TestBed } from '@angular/core/testing';

import { FictionmoviesService } from './fictionmovies.service';

describe('FictionmoviesService', () => {
  let service: FictionmoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FictionmoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
