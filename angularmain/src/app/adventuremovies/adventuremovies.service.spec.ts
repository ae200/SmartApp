import { TestBed } from '@angular/core/testing';

import { AdventuremoviesService } from './adventuremovies.service';

describe('AdventuremoviesService', () => {
  let service: AdventuremoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdventuremoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
