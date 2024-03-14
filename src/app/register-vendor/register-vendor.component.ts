import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vendor } from '../vendor';
import { VendorServiceService } from '../vendor-service.service';

@Component({
  selector: 'app-register-vendor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-vendor.component.html',
  styleUrl: './register-vendor.component.css'
})
export class RegisterVendorComponent implements OnInit{

  ven:Vendor = new Vendor();

  constructor(private vendorService:VendorServiceService){}
  ngOnInit(): void {
      
  }

  onSubmit(){
    console.log(this.ven);

    this.vendorService.postVendor(this.ven).subscribe({
      next : value =>{
        
      },
      error : error => {

      },
      complete : () => {

      }
    });
  }
}
