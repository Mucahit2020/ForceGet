import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'offer',
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./modules/offer/offer.module').then((m) => m.OfferModule),
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
