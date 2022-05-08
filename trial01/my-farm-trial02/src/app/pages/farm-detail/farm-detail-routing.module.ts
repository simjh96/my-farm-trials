import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmDetailPage } from './farm-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FarmDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmDetailPageRoutingModule {}
