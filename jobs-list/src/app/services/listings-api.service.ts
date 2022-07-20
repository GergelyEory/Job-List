import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJobListing } from '../models/listing';

@Injectable({
	providedIn: 'root',
})
export class ListingsApiService {
	constructor(private http: HttpClient) {}

	public loadListings(): Observable<Array<IJobListing>> {
		return this.http.get<Array<IJobListing>>('./assets/data/data.json');
	}
}
