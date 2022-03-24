import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NeighborFarmDetailPageRoutingModule } from './neighbor-farm-detail-routing.module';
import { NeighborFarmDetailPage } from './neighbor-farm-detail.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';
import { Pipes } from 'src/app/pipes/pipe';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeighborFarmDetailPageRoutingModule,
    SharedDirectivesModule,
    Pipes,
    ComponentsModule,
  ],
  declarations: [
    NeighborFarmDetailPage,

    // FakeTabComponent,
    // FooterComponent,
  ],
})
export class NeighborFarmDetailPageModule {}
