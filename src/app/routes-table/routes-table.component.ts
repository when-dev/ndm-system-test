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
  routes: Route[] = [...ROUTES];
  sortColumn: keyof Route = 'address';
  sortDirection: 1 | -1 = 1;

  sort(column: keyof Route) {
    if (this.sortColumn === column) {
      this.sortDirection = -this.sortDirection as 1 | -1;
    } else {
      this.sortColumn = column;
      this.sortDirection = 1;
    }
    this.routes.sort((a, b) => {
      if (a[column] < b[column]) return -1 * this.sortDirection;
      if (a[column] > b[column]) return 1 * this.sortDirection;
      return 0;
    })
  }
}
