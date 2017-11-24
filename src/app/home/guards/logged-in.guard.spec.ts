import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedInGuard } from './logged-in.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../app.module';
import { HomePageComponent } from '../home-page/home-page.component';

describe('LoggedInGuard', () => {
  let homepageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule
      ]
    });

    homepageComponent = TestBed.createComponent(HomePageComponent);
    homepageComponent.detectChanges();
  });

  it('should ...', inject([LoggedInGuard], (guard: LoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
