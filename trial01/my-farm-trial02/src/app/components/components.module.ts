import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { SearchBarSimpleComponent } from './search-bar-simple/search-bar-simple.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { Pipes } from '../pipes/pipe';
import { SharedDirectivesModule } from '../directives/shared-directives.module';


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
  ],
  exports: [
    SearchBarSimpleComponent,
    ItemDetailComponent,
  ],
})
export class ComponentsModule {}
