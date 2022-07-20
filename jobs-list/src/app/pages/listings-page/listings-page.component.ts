import { ChangeDetectionStrategy, Component } from '@angular/core';
import { JobsStore } from '../../state/jobs-store.service';

@Component({
	templateUrl: './listings-page.component.html',
	styleUrls: ['./listings-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		{
			provide: JobsStore,
			useClass: JobsStore,
		},
	],
})
export class ListingsPageComponent {
	constructor(public jobsStore: JobsStore) {}
}
