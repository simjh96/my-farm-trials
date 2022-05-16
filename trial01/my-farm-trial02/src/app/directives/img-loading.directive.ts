// https://dev.to/paviad/angular-wait-for-all-images-to-load-3hp1
import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';
import {
  LoadingController
} from '@ionic/angular';
import {
  ImgLoadingService
} from '../services/img-loading.service';
import {
  map
} from 'rxjs/operators';

@Directive({
  selector: 'img'
})
export class ImgLoadingDirective {
  // constructor 딴에서 작동하기 때문에 onInit 이후 사용되는 render2 에는 사용 불가
  constructor(private el: ElementRef,
    private imageService: ImgLoadingService,
    public loadingController: LoadingController) {
    if (imageService.imagesLoading == 0) {
      console.log('running loading controller');
      this.loadingController.create().then((res) => {
        res.present();

        console.log('loader present');
        if (this.imageService.imagesLoading === 0) {
          console.log('all imgs loaded before loader loaded');
          res.dismiss().then((res) => {
            console.log('Loading dismissed!', res);
          }).catch((error) => {
            console.log('error', error);
          });
        }
        imageService._imagesLoading.pipe(map((imagesLoad) => {
          if (imagesLoad === 0) {
            console.log('safe to dismiss');
            this.loadingController.dismiss().then((res) => {
              console.log('Loading dismissed!', res);
            }).catch((error) => {
              console.log('error', error);
            });
          }
        })).subscribe();
      });
    }
    imageService.imageLoading(el.nativeElement);

  }

  @HostListener('load')
  onLoad() {
    // loader present 되기 전에 image load 되는것 방지(그러면 subscribe 해도 들어오는게 없음)
    setTimeout(() => {
      console.log('image loaded');
      this.imageService.imageLoadedOrError(this.el.nativeElement);
    }, 10);
  }

  @HostListener('error')
  onError() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }
}
