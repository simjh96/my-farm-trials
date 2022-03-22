import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewWritePageRoutingModule } from './review-write-routing.module';

import { ReviewWritePage } from './review-write.page';
import { ItemDetailComponent } from 'src/app/components/item-detail/item-detail.component';
import { ChipSlidersComponent } from 'src/app/components/chip-sliders/chip-sliders.component';
import { SharedDirectivesModule } from 'src/app/directives/shared-directives.module';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewWritePageRoutingModule,
    SharedDirectivesModule,
  ],
  declarations: [
    ReviewWritePage,
    ItemDetailComponent,
    ChipSlidersComponent,
    FooterComponent,
  ],
})
export class ReviewWritePageModule {}
