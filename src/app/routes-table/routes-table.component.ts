import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ROUTES, Route } from '../routes.data';

@Component({
  selector: 'app-routes-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './routes-table.component.html',
  styleUrls: ['./routes-table.component.css'],
})
export class RoutesTableComponent {
  routes: Route[] = ROUTES;
}
