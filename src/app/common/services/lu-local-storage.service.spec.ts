import { TestBed, inject } from '@angular/core/testing';

import { LuLocalStorageService } from './lu-local-storage.service';

describe('LuLocalStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LuLocalStorageService]
    });
  });

  it('should be created', inject([LuLocalStorageService], (service: LuLocalStorageService) => {
    expect(service).toBeTruthy();
  }));
});
