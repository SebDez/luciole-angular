// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// MODULES
import { GameVersionsModule } from './game-versions/game-versions.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { LuCommonModule } from './common/common.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './home/login-page/login-page.component';
import { LoginFormComponent } from './home/login-form/login-form.component';

// ROUTING
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

// STYLING
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule,
  MatToolbarModule, MatInputModule, MatFormFieldModule, MatCardModule
} from '@angular/material';

// SERVICES
import { UserDaoService } from './home/services/dao/user-dao.service';
import { UserApiService } from './home/services/api/user-api.service';
import { UserMockApiService } from './home/services/mock/user-mock-api.service';
import { LoggedInGuard } from './home/guards/logged-in.guard';

/**
 * The module containing all the app
 * @export
 * @class LuCommonModule
 */
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule, MatInputModule, MatFormFieldModule, MatCardModule,
    GameVersionsModule,
    ConfigurationModule,
    LuCommonModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [
    UserDaoService,
    UserApiService,
    UserMockApiService,
    LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
