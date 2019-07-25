import { TestBed } from '@angular/core/testing';

import { SpecificationMasterService } from './specification-master.service';

describe('SpecificationMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpecificationMasterService = TestBed.get(SpecificationMasterService);
    expect(service).toBeTruthy();
  });
});
