import { TestBed } from '@angular/core/testing';

import { ComedythrillerService } from './comedythriller.service';

describe('ComedythrillerService', () => {
  let service: ComedythrillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComedythrillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
