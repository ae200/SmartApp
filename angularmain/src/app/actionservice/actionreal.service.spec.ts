import { TestBed } from '@angular/core/testing';

import { ActionrealService } from './actionreal.service';

describe('ActionrealService', () => {
  let service: ActionrealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionrealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
