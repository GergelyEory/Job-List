import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IJobListing } from '../../models/listing';
import { JobsStore } from '../../state/jobs-store.service';

@Component({
	selector: 'app-listing-card',
	templateUrl: './listing-card.component.html',
	styleUrls: ['./listing-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingCardComponent {
	@Input() listing!: IJobListing;

	constructor(public jobsStore: JobsStore) {}
}
