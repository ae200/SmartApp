import { TestBed } from '@angular/core/testing';

import { AdventurerealService } from './adventurereal.service';

describe('AdventurerealService', () => {
  let service: AdventurerealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdventurerealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
