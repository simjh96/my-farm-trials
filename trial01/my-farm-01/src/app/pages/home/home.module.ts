import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DefaultHomePage } from '../default-home/default-home.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedDirectivesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvsbUCSE2t2YZa3hw9RF3Imrjj9KXb1iU',
      language: (localStorage && localStorage.gml) || 'ko',
    }),
  ],
  declarations: [HomePage, DefaultHomePage],
})
export class HomePageModule {}
