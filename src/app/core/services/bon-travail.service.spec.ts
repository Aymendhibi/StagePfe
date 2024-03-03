import { TestBed } from '@angular/core/testing';

import { BonTravailService } from './bon-travail.service';

describe('BonTravailService', () => {
  let service: BonTravailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BonTravailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
