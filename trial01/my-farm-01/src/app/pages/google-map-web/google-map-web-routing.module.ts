import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapWebPage } from './google-map-web.page';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleMapWebPageRoutingModule {}
