import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailService } from 'src/app/services/item-detail.service';

import { FarmDataPage } from './farm-data.page';

const routes: Routes = [
  {
    path: '',
    component: FarmDataPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), ItemDetailService],
  exports: [RouterModule],
})
export class FarmDataPageRoutingModule {}
