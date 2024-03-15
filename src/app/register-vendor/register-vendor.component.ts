import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Vendor } from '../vendor';
import { VendorServiceService } from '../vendor-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-vendor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-vendor.component.html',
  styleUrl: './register-vendor.component.css'
})
export class RegisterVendorComponent implements OnInit{

  ven:Vendor = new Vendor();
  isLoading:boolean = false;
  messageButton:String = 'Save';

  constructor(private vendorService:VendorServiceService, private router:Router){}
  ngOnInit(): void {
      
  }

  onSubmit(){

    this.isLoading = true;
    this.messageButton = 'Saving...';

    setTimeout(() => {
      this.messageButton = 'Saved!';
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/vendor']);
      }, 2000);
    }, 5000);
    
    /*
    this.vendorService.postVendor(this.ven).subscribe({
      next : value =>{
        console.log("Saved:");
        console.log(value);
        this.router.navigate(['/vendor']);
      },
      error : error => {
        console.error("Error: ");
        console.log(error);
      },
      complete : () => {
        this.isLoading = false;
        console.log("Promise done");
      }
    });
    */
  }
}
