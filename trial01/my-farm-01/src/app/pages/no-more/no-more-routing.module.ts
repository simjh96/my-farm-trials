import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoMorePage } from './no-more.page';

const routes: Routes = [
  {
    path: '',
    component: NoMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoMorePageRoutingModule {}
