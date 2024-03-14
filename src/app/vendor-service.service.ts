import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  //private baseUrl = 'http://localhost:8080/api/vendor/allRecords';
  private baseUrl = 'http://localhost:8080/api/vendor/';


  constructor(private httpClient : HttpClient) { }

  getVendorList():Observable<Vendor[]>{
    return this.httpClient.get<Vendor[]>(this.baseUrl+"allRecords");
  }

  postVendor(ven:Vendor):Observable<Object>{
    return this.httpClient.post(this.baseUrl, ven);
  }

  deleteVendor(vendorId:number):Observable<Object>{
    return this.httpClient.delete(this.baseUrl + vendorId);
  }

  updateVendor(vendorId:number, ven:Vendor):Observable<Object>{
    return this.httpClient.put<Vendor>(this.baseUrl + vendorId, ven);
  }

  getVendorById(vendorId:number):Observable<Vendor>{
    return this.httpClient.get<Vendor>(this.baseUrl+vendorId);
  }
}
