import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';

import {
  IonicModule
} from '@ionic/angular';

import {
  FarmDetailPageRoutingModule
} from './farm-detail-routing.module';

import {
  FarmDetailPage
} from './farm-detail.page';
import {
  ComponentsModule
} from 'src/app/components/components.module';
import { Pipes } from 'src/app/pipes/pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmDetailPageRoutingModule, ComponentsModule,
    Pipes, NgbModule
  ],
  declarations: [FarmDetailPage]
})
export class FarmDetailPageModule {}
