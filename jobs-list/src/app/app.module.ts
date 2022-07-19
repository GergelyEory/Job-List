import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingCardComponent } from './components/listing-card/listing-card.component';
import { TagFilterComponent } from './components/tag-filter/tag-filter.component';
import { ListingsPageComponent } from './pages/listings-page/listings-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListingCardComponent,
    TagFilterComponent,
    ListingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
