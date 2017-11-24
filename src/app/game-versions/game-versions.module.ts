import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameVersionsPageComponent } from './game-versions-page/game-versions-page.component';
import { LuCommonModule } from '../common/common.module';

/**
 * The module containing the game versions management
 * @export
 * @class LuCommonModule
 */
@NgModule({
  imports: [
    CommonModule,
    LuCommonModule
  ],
  declarations: [GameVersionsPageComponent],
  exports: []
})
export class GameVersionsModule { }
