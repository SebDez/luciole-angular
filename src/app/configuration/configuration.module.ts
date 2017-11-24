import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationPageComponent } from './configuration-page/configuration-page.component';
import { LuCommonModule } from '../common/common.module';
/**
 * The module for GV configurations
 * @export
 * @class ConfigurationModule
 */
@NgModule({
  imports: [
    CommonModule,
    LuCommonModule
  ],
  declarations: [ConfigurationPageComponent],
  exports: []
})

export class ConfigurationModule { }
