import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmOfMonthPage } from './farm-of-month.page';

const routes: Routes = [
  {
    path: '',
    component: FarmOfMonthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FarmOfMonthPageRoutingModule {}
