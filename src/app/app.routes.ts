import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'OneBioTech | Home'
  },
  {
    path: 'contact-us',
    pathMatch: 'full',
    component: ContactComponent,
    title: 'OneBioTech | Contact US'
  }
];