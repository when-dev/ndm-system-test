import { Component } from '@angular/core';
import { RoutesListComponent } from './routes-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RoutesListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'routes-table';
}
