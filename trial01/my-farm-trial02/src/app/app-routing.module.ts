import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'seed',
    loadChildren: () => import('./pages/seed/seed.module').then( m => m.SeedPageModule)
  },
  {
    path: 'farm-of-month',
    loadChildren: () => import('./pages/farm-of-month/farm-of-month.module').then( m => m.FarmOfMonthPageModule)
  },
  {
    path: 'farm-detail',
    loadChildren: () => import('./pages/farm-detail/farm-detail.module').then( m => m.FarmDetailPageModule)
  },
  {
    path: 'magazine-inprogress',
    loadChildren: () => import('./pages/magazine-inprogress/magazine-inprogress.module').then( m => m.MagazineInprogressPageModule)
  },  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
