import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyFarmPage } from './my-farm.page';

const routes: Routes = [
  {
    path: '',
    component: MyFarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyFarmPageRoutingModule {}
