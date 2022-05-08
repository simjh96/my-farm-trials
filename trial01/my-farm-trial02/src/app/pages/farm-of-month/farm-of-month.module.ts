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
  FarmOfMonthPageRoutingModule
} from './farm-of-month-routing.module';

import {
  FarmOfMonthPage
} from './farm-of-month.page';
import {
  NgbModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  SharedDirectivesModule
} from 'src/app/directives/shared-directives.module';
import {
  ComponentsModule
} from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FarmOfMonthPageRoutingModule,
    SharedDirectivesModule, NgbModule,
    ComponentsModule,
  ],
  declarations: [FarmOfMonthPage]
})
export class FarmOfMonthPageModule {}
