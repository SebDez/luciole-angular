// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';

// ROUTING
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './common/menu/menu.component';

// STYLING
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatIconModule, MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
