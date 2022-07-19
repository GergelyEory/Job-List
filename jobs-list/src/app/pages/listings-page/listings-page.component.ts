import { Component, OnInit } from '@angular/core';
import { ListingsApiService } from '../../services/listings-api.service';

@Component({
	templateUrl: './listings-page.component.html',
	styleUrls: ['./listings-page.component.scss'],
})
export class ListingsPageComponent implements OnInit {
	constructor(public listingsApi: ListingsApiService) {}

	ngOnInit(): void {
		this.listingsApi.loadListings().subscribe((listings) => console.log(listings));
	}
}
