import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { IJobListing } from '../models/listing';
import { ListingsApiService } from '../services/listings-api.service';
import { switchMap, tap } from 'rxjs';

export interface JobsState {
	tags: Array<string>;
	listings: Array<IJobListing>;
}

const defaultState = { tags: [], listings: [] };

@Injectable()
export class JobsStore extends ComponentStore<JobsState> {
	listings$ = this.select((state) => state.listings);
	tags$ = this.select((state) => state.tags);

	filteredListings$ = this.select(this.listings$, this.tags$, (listings, tags) =>
		listings.filter((listing) => tags.every((tag) => listing.tags.includes(tag)))
	);

	constructor(private listingsApi: ListingsApiService) {
		super(defaultState);
		this.loadJobs();
	}

	loadJobs = this.effect(($) => {
		return $.pipe(
			switchMap(() =>
				this.listingsApi.loadListings().pipe(
					tap({
						next: (listings) =>
							this.patchState({
								listings: listings.map((listing) => {
									return {
										...listing,
										tags: [listing.role, listing.level, ...listing.languages, ...listing.tools],
									} as IJobListing;
								}),
							}),
						error: () => {},
					})
				)
			)
		);
	});

	addTag = this.updater((state, tag: string) => ({
		...state,
		tags: [...new Set([...state.tags, tag])],
	}));

	removeTag = this.updater((state, tag: string) => ({
		...state,
		tags: state.tags.filter((t) => t !== tag),
	}));

	clearTags = (): void => this.patchState({ tags: [] });
}
