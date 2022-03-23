import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { DefaultHomePage } from '../default-home/default-home.page';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';
import { AgmCoreModule } from '@agm/core';
import { NeighborFarmPage } from '../neighbor-farm/neighbor-farm.page';
import { ItemDetailComponent } from 'src/app/components/item-detail/item-detail.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SelectComponent } from 'src/app/components/select/select.component';
import { MyFarmPage } from '../my-farm/my-farm.page';
import { FakeTabComponent } from 'src/app/components/fake-tab/fake-tab.component';
import { TruncatePipe } from 'src/app/pipes/truncate.pipe';
import { Pipes } from 'src/app/pipes/pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedDirectivesModule,
    Pipes,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvsbUCSE2t2YZa3hw9RF3Imrjj9KXb1iU',
      language: (localStorage && localStorage.gml) || 'ko',
    }),
  ],
  declarations: [
    HomePage,
    DefaultHomePage,
    NeighborFarmPage,
    ItemDetailComponent,
    FooterComponent,
    SelectComponent,
    MyFarmPage,
    FakeTabComponent,
  ],
})
export class HomePageModule {}
