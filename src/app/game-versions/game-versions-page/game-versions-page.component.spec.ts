import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameVersionsPageComponent } from './game-versions-page.component';
import { LuCommonModule } from '../../common/common.module';

describe('GameVersionsPageComponent', () => {
  let component: GameVersionsPageComponent;
  let fixture: ComponentFixture<GameVersionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameVersionsPageComponent],
      imports: [LuCommonModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameVersionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
