import { Component } from '@angular/core';
import { RoutesTableComponent } from './routes-table/routes-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoutesTableComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'routes-table';
}
