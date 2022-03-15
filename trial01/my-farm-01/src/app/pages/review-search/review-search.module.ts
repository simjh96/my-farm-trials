import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewSearchPageRoutingModule } from './review-search-routing.module';

import { ReviewSearchPage } from './review-search.page';
import { SearchBarSimpleComponent } from 'src/app/components/search-bar-simple/search-bar-simple.component';
import { ItemListComponent } from 'src/app/components/item-list/item-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewSearchPageRoutingModule,
  ],
  declarations: [ReviewSearchPage, SearchBarSimpleComponent, ItemListComponent],
})
export class ReviewSearchPageModule {}
