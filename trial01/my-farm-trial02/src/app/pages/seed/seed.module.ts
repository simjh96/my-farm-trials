import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeedPageRoutingModule } from './seed-routing.module';

import { SeedPage } from './seed.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeedPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SeedPage]
})
export class SeedPageModule {}
