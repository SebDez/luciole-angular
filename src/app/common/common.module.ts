import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ROUTING
import { RouterModule } from '@angular/router';

// COMPONENTS
import { MenuComponent } from './menu/menu.component';
import { UnavailableComponent } from './unavailable/unavailable.component';

// STYLING
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';

// SERVICES
import { MockHelperService } from './services/mock-helper.service';
import { LuLocalStorageService } from './services/lu-local-storage.service';
import { AuthInterceptorService } from './services/auth-interceptor.service';

/**
 * The module containing all common elements
 * @export
 * @class LuCommonModule
 */
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule, MatCardModule,
    RouterModule
  ],
  declarations: [
    MenuComponent,
    UnavailableComponent
  ],
  exports: [
    MenuComponent,
    UnavailableComponent
  ],
  providers: [
    MockHelperService,
    LuLocalStorageService,
    AuthInterceptorService
  ]
})

export class LuCommonModule { }
