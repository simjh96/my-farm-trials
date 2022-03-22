import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeighborFarmDetailPageRoutingModule } from './neighbor-farm-detail-routing.module';

import { NeighborFarmDetailPage } from './neighbor-farm-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeighborFarmDetailPageRoutingModule
  ],
  declarations: [NeighborFarmDetailPage]
})
export class NeighborFarmDetailPageModule {}
