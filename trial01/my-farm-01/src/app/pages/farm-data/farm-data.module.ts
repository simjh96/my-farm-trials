import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FarmDataPageRoutingModule } from './farm-data-routing.module';

import { FarmDataPage } from './farm-data.page';
import { Pipes } from 'src/app/pipes/pipe';

import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmDataPageRoutingModule,
    Pipes,
  ],
  declarations: [FarmDataPage],
})
export class FarmDataPageModule {}
