import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor';
import { CommonModule } from '@angular/common';
import { VendorServiceService } from '../vendor-service.service';

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

  constructor(private service:VendorServiceService){}

  public hideError(){
    this.showError = false;
  }

  ngOnInit(): void {

    this.isLoading = true;
    
    this.service.getVendorList().subscribe({
      next : response => {
        this.vendors = response;
        this.isLoading = false;
      },
      error : err => {
        console.error(err);
        this.errorMessage = err.message;
        this.showError = true;

      },
      complete : () => {
        console.log("promise complete");
      }
    });
  }
}
