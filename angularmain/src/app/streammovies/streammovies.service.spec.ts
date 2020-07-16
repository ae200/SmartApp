import { TestBed } from '@angular/core/testing';

import { StreammoviesService } from './streammovies.service';

describe('StreammoviesService', () => {
  let service: StreammoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreammoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
