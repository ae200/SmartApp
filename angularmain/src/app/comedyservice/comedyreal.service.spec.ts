import { TestBed } from '@angular/core/testing';

import { ComedyrealService } from './comedyreal.service';

describe('ComedyrealService', () => {
  let service: ComedyrealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComedyrealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
