import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { VendorServiceService } from '../vendor-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-update-vendor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-vendor.component.html',
  styleUrl: './update-vendor.component.css'
})
export class UpdateVendorComponent implements OnInit{
  
  currentVendor:Vendor = new Vendor();
  isLoading:boolean = false;
  buttonMessage:string = 'Update';
  vendorId:number = this.router.snapshot.params['id'];

  constructor(private vendorService:VendorServiceService, private redirect:Router, private router:ActivatedRoute){}
  
  ngOnInit(): void {
      this.vendorService.getVendorById(this.vendorId).subscribe({
        next: response =>{
          this.currentVendor = response;
        }
      });
  }

  onSubmit(){

    this.isLoading = true;
    this.vendorService.updateVendor(this.vendorId, this.currentVendor).subscribe({
      next : response =>{
        console.log(response);
        console.log("update correctly")
      },
      complete : () =>{
        this.isLoading = false;
        this.redirect.navigate(['/vendor']);
      }
    })
  }
}
