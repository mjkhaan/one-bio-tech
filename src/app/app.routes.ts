import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { TeamComponent } from './pages/team/team.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
  },
  {
    path: 'services',
    pathMatch: 'full',
    component: ServicesComponent,
  },
  {
    path: 'team',
    pathMatch: 'full',
    component: TeamComponent,
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
  },
];