import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Pipes } from '../pipes/pipe';

import { ChipSlidersComponent } from './chip-sliders/chip-sliders.component';
import { FakeTabComponent } from './fake-tab/fake-tab.component';
import { FooterComponent } from './footer/footer.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { SearchBarSimpleComponent } from './search-bar-simple/search-bar-simple.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Pipes],
  declarations: [
    ChipSlidersComponent,
    FakeTabComponent,
    FooterComponent,
    ItemDetailComponent,
    ItemListComponent,
    SearchBarSimpleComponent,
    SelectComponent,
  ],
  exports: [
    ChipSlidersComponent,
    FakeTabComponent,
    FooterComponent,
    ItemDetailComponent,
    ItemListComponent,
    SearchBarSimpleComponent,
    SelectComponent,
  ],
})
export class ComponentsModule {}
