import { Component } from '@angular/core';
import { PageLayoutComponent } from '../../page-layout/page-layout.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageLayoutComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
