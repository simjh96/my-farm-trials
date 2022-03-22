import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeighborFarmDetailPage } from './neighbor-farm-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NeighborFarmDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeighborFarmDetailPageRoutingModule {}
