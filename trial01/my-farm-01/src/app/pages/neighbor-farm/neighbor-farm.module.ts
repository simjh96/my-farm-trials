import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeighborFarmPageRoutingModule } from './neighbor-farm-routing.module';

import { NeighborFarmPage } from './neighbor-farm.page';
import { ItemDetailComponent } from 'src/app/components/item-detail/item-detail.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SelectComponent } from 'src/app/components/select/select.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeighborFarmPageRoutingModule,
  ],
  declarations: [
    NeighborFarmPage,
    ItemDetailComponent,
    FooterComponent,
    SelectComponent,
  ],
})
export class NeighborFarmPageModule {}
