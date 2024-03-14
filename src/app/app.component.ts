import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { VendorListComponent } from './vendor-list/vendor-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VendorListComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vendor Managment System';
}
