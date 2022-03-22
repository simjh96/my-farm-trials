import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyFarmPageRoutingModule } from './my-farm-routing.module';

import { MyFarmPage } from './my-farm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyFarmPageRoutingModule
  ],
  declarations: [MyFarmPage]
})
export class MyFarmPageModule {}
