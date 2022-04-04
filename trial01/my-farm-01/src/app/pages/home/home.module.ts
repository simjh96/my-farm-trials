import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';

import { Pipes } from 'src/app/pipes/pipe';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedDirectivesModule,
    Pipes,
    ComponentsModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
