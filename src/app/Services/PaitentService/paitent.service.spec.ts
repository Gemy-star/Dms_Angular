import { TestBed } from '@angular/core/testing';

import { PaitentService } from './paitent.service';

describe('PaitentServiceService', () => {
  let service: PaitentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaitentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
