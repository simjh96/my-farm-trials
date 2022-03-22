import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeighborFarmPage } from './neighbor-farm.page';

const routes: Routes = [
  {
    path: '',
    component: NeighborFarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeighborFarmPageRoutingModule {}
