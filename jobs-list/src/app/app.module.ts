import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingCardComponent } from './components/listing-card/listing-card.component';
import { TagFilterComponent } from './components/tag-filter/tag-filter.component';
import { ListingsPageComponent } from './pages/listings-page/listings-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SelectTagComponent } from './components/select-tag/select-tag.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [AppComponent, ListingCardComponent, TagFilterComponent, ListingsPageComponent, SelectTagComponent],
	imports: [
		CommonModule,
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MatCardModule,
		MatChipsModule,
		MatIconModule,
		MatButtonModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
