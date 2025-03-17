import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

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
  {
    path: 'privacy-policy',
    pathMatch: 'full',
    component: PrivacyComponent,
    title: 'Apollo Technologies | Privacy Policy'
  }
];