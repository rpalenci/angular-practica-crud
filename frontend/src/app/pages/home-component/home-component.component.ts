import { Component } from '@angular/core';
import { CrudTableComponent } from "./components/crud-table-component/crud-table-component";

@Component({
  selector: 'app-home-component',
  standalone: true,
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css',
  imports: [CrudTableComponent]
})
export class HomeComponent {

}
