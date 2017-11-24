import { TestBed, inject } from '@angular/core/testing';

import { MockHelperService } from './mock-helper.service';

describe('MockHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockHelperService]
    });
  });

  it('should be created', inject([MockHelperService], (service: MockHelperService) => {
    expect(service).toBeTruthy();
  }));
});
