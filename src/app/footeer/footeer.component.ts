import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footeer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footeer.component.html',
  styleUrl: './footeer.component.scss'
})
export class FooteerComponent {
  currentRoute: string = ''
  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
