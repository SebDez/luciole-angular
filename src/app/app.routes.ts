import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './home/login-page/login-page.component';
import { GameVersionsPageComponent } from './game-versions/game-versions-page/game-versions-page.component';
import { ConfigurationPageComponent } from './configuration/configuration-page/configuration-page.component';
import { UnavailableComponent } from './common/unavailable/unavailable.component';

export const ROUTES: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'unavailable', component: UnavailableComponent },
    { path: 'login', component: LoginPageComponent },
    {
        path: 'gv',
        children: [
            { path: '', component: GameVersionsPageComponent },
            { path: ':gvId', component: GameVersionsPageComponent }
        ]
    },
    {
        path: 'config',
        children: [
            {
                path: ':gvId',
                component: ConfigurationPageComponent,
                children: [
                    { path: '', pathMatch: 'full', redirectTo: 'resume' },
                    {
                        path: 'resume',
                        component: ConfigurationPageComponent
                    },
                    {
                        path: 'kingdom',
                        component: ConfigurationPageComponent
                    },
                    {
                        path: 'buildings',
                        component: ConfigurationPageComponent
                    }
                ]
            }
        ]
    }
];
