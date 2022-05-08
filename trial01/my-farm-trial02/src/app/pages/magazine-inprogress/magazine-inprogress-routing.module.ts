import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagazineInprogressPage } from './magazine-inprogress.page';

const routes: Routes = [
  {
    path: '',
    component: MagazineInprogressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagazineInprogressPageRoutingModule {}
