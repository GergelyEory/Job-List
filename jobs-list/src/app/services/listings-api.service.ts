import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobListing } from '../models/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingsApiService {

  constructor(private http: HttpClient) { }

  public loadListings(): Observable<Array<JobListing>> {
    return this.http.get<Array<JobListing>>('./assets/data/data.json');
  }
}
