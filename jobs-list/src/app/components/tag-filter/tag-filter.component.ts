import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs';
import { JobsStore } from '../../state/jobs-store.service';

@Component({
	selector: 'app-tag-filter',
	templateUrl: './tag-filter.component.html',
	styleUrls: ['./tag-filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagFilterComponent {
	showTags$ = this.jobsStore.tags$.pipe(map((tags) => tags.length > 0));

	constructor(public jobsStore: JobsStore) {}
}
