import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorServiceService {

  private baseUrl = 'http://localhost:8080/api/vendor/allRecords';


  constructor(private httpClient : HttpClient) { }

  getVendorList():Observable<Vendor[]>{
    return this.httpClient.get<Vendor[]>(this.baseUrl);
  }
}
