import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferCreateComponent } from './offer-create/offer-create.component';
import { OfferFetchComponent } from './offer-fetch/offer-fetch.component';

const routes: Routes = [
  {
    path: 'create',
    component: OfferCreateComponent,
  },
  {
    path: 'fetch',
    component: OfferFetchComponent,
  },
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
