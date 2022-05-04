import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgLoadingDirective } from './img-loading.directive';


@NgModule({
  declarations: [ImgLoadingDirective],
  imports: [CommonModule],
  exports: [ImgLoadingDirective],
})
export class SharedDirectivesModule {}
