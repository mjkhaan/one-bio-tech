import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { OurProductsComponent } from './pages/our-products/our-products.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    title: 'OneBioTech | Home'
  },
  {
    path: 'why-us',
    pathMatch: 'full',
    component: WhyUsComponent,
    title: 'OneBioTech | Why Us'
  },
  {
    path: 'our-products',
    pathMatch: 'full',
    component: OurProductsComponent,
    title: 'OneBioTech | Our Products'
  },
  { path: 'contact-us',
    pathMatch: 'full',
    component: ContactComponent,
    title: 'OneBioTech | Contact US'}
];