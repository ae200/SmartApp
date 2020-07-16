import { TestBed } from '@angular/core/testing';

import { DramamoviesService } from './dramamovies.service';

describe('DramamoviesService', () => {
  let service: DramamoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DramamoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
