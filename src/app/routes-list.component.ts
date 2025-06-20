import { Component } from '@angular/core';
import { ROUTES, Route } from './routes.data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-routes-list',
  standalone: true,
  imports: [NgFor],
  template: `
    <ul>
      <li *ngFor="let route of routes">
        {{ route.address }} ({{ route.interface }}) — gateway:
        {{ route.gateway }}
      </li>
    </ul>
  `,
})
export class RoutesListComponent {
  routes: Route[] = ROUTES;
}
