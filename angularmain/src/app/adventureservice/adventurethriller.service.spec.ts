import { TestBed } from '@angular/core/testing';

import { AdventurethrillerService } from './adventurethriller.service';

describe('AdventurethrillerService', () => {
  let service: AdventurethrillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdventurethrillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
