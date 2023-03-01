import { TestBed } from '@angular/core/testing';

import { ClaimService } from './claim-service.service';

describe('ClaimServiceService', () => {
  let service: ClaimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
