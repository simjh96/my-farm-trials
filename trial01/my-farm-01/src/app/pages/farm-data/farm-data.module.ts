import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmDataPageRoutingModule } from './farm-data-routing.module';

import { FarmDataPage } from './farm-data.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FarmDataPageRoutingModule],
  declarations: [FarmDataPage],
})
export class FarmDataPageModule {}
