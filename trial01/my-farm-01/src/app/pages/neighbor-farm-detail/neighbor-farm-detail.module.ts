import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeighborFarmDetailPageRoutingModule } from './neighbor-farm-detail-routing.module';

import { NeighborFarmDetailPage } from './neighbor-farm-detail.page';
import { FakeTabComponent } from 'src/app/components/fake-tab/fake-tab.component';
import { FarmDataPage } from '../farm-data/farm-data.page';
import { GrowthDiaryPage } from '../growth-diary/growth-diary.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeighborFarmDetailPageRoutingModule,
    SharedDirectivesModule,
  ],
  declarations: [
    NeighborFarmDetailPage,
    FakeTabComponent,
    FarmDataPage,
    GrowthDiaryPage,
  ],
})
export class NeighborFarmDetailPageModule {}
