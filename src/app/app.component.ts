import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VendorListComponent } from './vendor-list/vendor-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VendorListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'index';
}
