import { Component, Input } from '@angular/core';
import { JobListing } from '../../models/listing';

@Component({
	selector: 'app-listing-card',
	templateUrl: './listing-card.component.html',
	styleUrls: ['./listing-card.component.scss'],
})
export class ListingCardComponent {
	@Input() listing!: JobListing;
}
