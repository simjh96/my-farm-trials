import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagazineInprogressPageRoutingModule } from './magazine-inprogress-routing.module';

import { MagazineInprogressPage } from './magazine-inprogress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagazineInprogressPageRoutingModule
  ],
  declarations: [MagazineInprogressPage]
})
export class MagazineInprogressPageModule {}
