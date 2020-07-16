import { TestBed } from '@angular/core/testing';

import { ComedymoviesService } from './comedymovies.service';

describe('ComedymoviesService', () => {
  let service: ComedymoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComedymoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
