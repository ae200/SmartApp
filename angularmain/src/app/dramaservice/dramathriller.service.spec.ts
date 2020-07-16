import { TestBed } from '@angular/core/testing';

import { DramathrillerService } from './dramathriller.service';

describe('DramathrillerService', () => {
  let service: DramathrillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DramathrillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
