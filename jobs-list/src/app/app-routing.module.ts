import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsPageComponent } from './pages/listings-page/listings-page.component';

const routes: Routes = [
  { path: '', component: ListingsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
