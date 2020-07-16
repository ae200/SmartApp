import { TestBed } from '@angular/core/testing';

import { ActionmoviesService } from './actionmovies.service';

describe('ActionmoviesService', () => {
  let service: ActionmoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionmoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
