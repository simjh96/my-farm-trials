import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultHomePage } from './default-home.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultHomePageRoutingModule {}
