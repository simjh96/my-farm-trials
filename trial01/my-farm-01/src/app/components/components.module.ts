import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChipSlidersComponent } from './chip-sliders/chip-sliders.component';
import { FakeTabComponent } from './fake-tab/fake-tab.component';
import { FooterComponent } from './footer/footer.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchBarSimpleComponent } from './search-bar-simple/search-bar-simple.component';
import { SelectComponent } from './select/select.component';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { NeighborFarmComponent } from './neighbor-farm/neighbor-farm.component';
import { FarmDataComponent } from './farm-data/farm-data.component';
import { GrowthDiaryComponent } from './growth-diary/growth-diary.component';

import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { Pipes } from '../pipes/pipe';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { SwiperModule } from 'swiper/angular';
import { MyFarmComponent } from './my-farm/my-farm.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pipes,
    AgmCoreModule.forRoot({
      apiKey: environment['API_KEY'],
      language: (localStorage && localStorage.gml) || 'ko',
    }),
    SharedDirectivesModule,
    SwiperModule,
  ],
  declarations: [
    ChipSlidersComponent,
    FakeTabComponent,
    FooterComponent,
    ItemDetailComponent,
    ItemListComponent,
    SearchBarSimpleComponent,
    SelectComponent,
    DefaultHomeComponent,
    NeighborFarmComponent,
    FarmDataComponent,
    GrowthDiaryComponent,
    MyFarmComponent,
  ],
  exports: [
    ChipSlidersComponent,
    FakeTabComponent,
    FooterComponent,
    ItemDetailComponent,
    ItemListComponent,
    SearchBarSimpleComponent,
    SelectComponent,
    DefaultHomeComponent,
    NeighborFarmComponent,
    FarmDataComponent,
    GrowthDiaryComponent,
    MyFarmComponent,
  ],
})
export class ComponentsModule {}
