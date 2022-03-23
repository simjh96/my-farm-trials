import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrowthDiaryPageRoutingModule } from './growth-diary-routing.module';

import { GrowthDiaryPage } from './growth-diary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrowthDiaryPageRoutingModule
  ],
  declarations: [GrowthDiaryPage]
})
export class GrowthDiaryPageModule {}
