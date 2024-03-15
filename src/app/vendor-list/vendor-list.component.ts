import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { CommonModule } from '@angular/common';
import { VendorServiceService } from '../vendor-service.service';
import { Router } from '@angular/router';
import { error } from 'console';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-vendor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css'
})
export class VendorListComponent implements OnInit {

  vendors:Vendor[];
  isLoading:boolean;
  showError:boolean = false;
  errorMessage:string;

  constructor(private service:VendorServiceService, private router:Router){}

  public hideError(){
    this.showError = false;
  }

  ngOnInit(): void {
    
    this.isLoading = true;
    this.getVendorList();

  }

  getVendorList(){

    this.service.getVendorList().subscribe({
      next : response => {
        this.vendors = response;
        this.isLoading = false;
      },
      error : err => {
        console.error(err);
        this.errorMessage = err.name;
        this.showError = true;

      },
      complete : () => {
        console.log("promise complete");
      }
    });

  }


  goToUpdateView(vendorId:number){
    this.router.navigate(['/update-vendor', vendorId]);
  }

  deleteRecord(vendorId:number){
    this.service.deleteVendor(vendorId).subscribe({
      next:(value) => {
        this.router.navigate(['']);
      },
      error : error => {
        console.error("handle error");
      },
      complete : () =>{
        console.log("delete promise complete");
        this.getVendorList();
      }
    })
  }
}
