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
    title: 'UHP | Home'
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,
    title: 'UHP | About'
  },
  {
    path: 'services',
    pathMatch: 'full',
    component: ServicesComponent,
    title: 'UHP | Services'
  },
  {
    path: 'team',
    pathMatch: 'full',
    component: TeamComponent,
    title: 'UHP | Team'
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
    title: 'UHP | Contact'
  },
];