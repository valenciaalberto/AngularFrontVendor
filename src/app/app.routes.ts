import { Routes } from '@angular/router';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';

export const routes: Routes = [
    {path: '', redirectTo:'vendor', pathMatch:'full'},
    {path: 'vendor', component: VendorListComponent},
    {path: 'vendor-register', component : RegisterVendorComponent}
];
