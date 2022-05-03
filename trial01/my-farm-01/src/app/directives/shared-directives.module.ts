import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HideHeaderDirective } from './hide-header.directive';
import { ImgLoadingDirective } from './img-loading.directive';

@NgModule({
  declarations: [HideHeaderDirective, ImgLoadingDirective],
  imports: [CommonModule],
  exports: [HideHeaderDirective, ImgLoadingDirective],
})
export class SharedDirectivesModule {}
