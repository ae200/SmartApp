import { TestBed } from '@angular/core/testing';

import { ActionthrillerService } from './actionthriller.service';

describe('ActionthrillerService', () => {
  let service: ActionthrillerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionthrillerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
