import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewSearchPageRoutingModule } from './review-search-routing.module';

import { ReviewSearchPage } from './review-search.page';
import { SearchBarSimpleComponent } from 'src/app/components/search-bar-simple/search-bar-simple.component';
import { ItemListComponent } from 'src/app/components/item-list/item-list.component';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { Pipes } from 'src/app/pipes/pipe';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewSearchPageRoutingModule,
    SharedDirectivesModule,
    Pipes,
    ComponentsModule,
  ],
  declarations: [
    ReviewSearchPage,
    // SearchBarSimpleComponent,
    // ItemListComponent,
    // FooterComponent,
  ],
})
export class ReviewSearchPageModule {}
