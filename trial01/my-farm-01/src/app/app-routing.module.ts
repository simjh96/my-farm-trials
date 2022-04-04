import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'review-search',
    loadChildren: () =>
      import('./pages/review-search/review-search.module').then(
        (m) => m.ReviewSearchPageModule
      ),
  },
  {
    path: 'review-write/:itemId',
    loadChildren: () =>
      import('./pages/review-write/review-write.module').then(
        (m) => m.ReviewWritePageModule
      ),
  },

  {
    path: 'neighbor-farm-detail/:itemId',
    loadChildren: () =>
      import('./pages/neighbor-farm-detail/neighbor-farm-detail.module').then(
        (m) => m.NeighborFarmDetailPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
