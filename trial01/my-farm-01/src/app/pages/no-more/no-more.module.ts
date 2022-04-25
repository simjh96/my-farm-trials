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
  NoMorePageRoutingModule
} from './no-more-routing.module';

import {
  NoMorePage
} from './no-more.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoMorePageRoutingModule,
  ],
  declarations: [NoMorePage]
})
export class NoMorePageModule {}
