import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleMapWebPageRoutingModule } from './google-map-web-routing.module';

import { GoogleMapWebPage } from './google-map-web.page';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapWebPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvsbUCSE2t2YZa3hw9RF3Imrjj9KXb1iU',
      libraries: ['places'],
    }),
  ],
  declarations: [GoogleMapWebPage],
})
export class GoogleMapWebPageModule {}
