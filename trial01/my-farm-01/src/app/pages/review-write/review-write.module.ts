import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewWritePageRoutingModule } from './review-write-routing.module';

import { ReviewWritePage } from './review-write.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewWritePageRoutingModule
  ],
  declarations: [ReviewWritePage]
})
export class ReviewWritePageModule {}
