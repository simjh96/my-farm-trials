import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SearchBarSimpleComponent } from './search-bar-simple/search-bar-simple.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { Pipes } from '../pipes/pipe';
import { SharedDirectivesModule } from '../directives/shared-directives.module';
import { FakeTabComponent } from './fake-tab/fake-tab.component';
import { SeedFallComponent } from './seed-fall/seed-fall.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedDirectivesModule,
    Pipes,
  ],
  declarations: [
    SearchBarSimpleComponent,
    ItemDetailComponent,
    FakeTabComponent,
    SeedFallComponent,
  ],
  exports: [
    SearchBarSimpleComponent,
    ItemDetailComponent,
    FakeTabComponent,
    SeedFallComponent,
  ],
})
export class ComponentsModule {}
