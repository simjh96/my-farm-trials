import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrowthDiaryPage } from './growth-diary.page';

const routes: Routes = [
  {
    path: '',
    component: GrowthDiaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrowthDiaryPageRoutingModule {}
