// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// MODULES
import { GameVersionsModule } from './game-versions/game-versions.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { LuCommonModule } from './common/common.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './home/login-page/login-page.component';

// ROUTING
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

// STYLING
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule } from '@angular/material';

/**
 * The module containing all the app
 * @export
 * @class LuCommonModule
 */
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule,
    GameVersionsModule,
    ConfigurationModule,
    LuCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
