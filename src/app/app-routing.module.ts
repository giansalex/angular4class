import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteComponent, AboutComponent, AuthComponent } from './container';
import { AuthService } from './services';

const routesList: Routes = [
  { path: '', canActivate : [AuthService], component: NoteComponent },
  { path: 'about', component: AboutComponent },
  { path: 'auth', component: AuthComponent},
  { path: '**', redirectTo: '' }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(routesList);
