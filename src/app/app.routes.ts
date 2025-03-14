import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'Apollo Technologies | Home'
  },
  {
    path: 'contact',
    pathMatch: 'full',
    component: ContactComponent,
    title: 'Apollo Technologies | Contact'
  },
];