import { TestBed, inject } from '@angular/core/testing';

import { UserDaoService } from './user-dao.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../../app.module';

describe('UserDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    });
  });

  it('should be created', inject([UserDaoService], (service: UserDaoService) => {
    expect(service).toBeTruthy();
  }));
});
