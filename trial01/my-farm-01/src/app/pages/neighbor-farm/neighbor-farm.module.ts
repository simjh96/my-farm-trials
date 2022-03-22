import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeighborFarmPageRoutingModule } from './neighbor-farm-routing.module';

import { NeighborFarmPage } from './neighbor-farm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeighborFarmPageRoutingModule
  ],
  declarations: [NeighborFarmPage]
})
export class NeighborFarmPageModule {}
