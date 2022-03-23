import { TestBed } from '@angular/core/testing';

import { FarmerDetailService } from './farmer-detail.service';

describe('FarmerDetailService', () => {
  let service: FarmerDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmerDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
