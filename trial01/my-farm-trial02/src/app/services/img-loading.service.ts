/* eslint-disable no-underscore-dangle */
// https://dev.to/paviad/angular-wait-for-all-images-to-load-3hp1
import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgLoadingService {
  public _imagesLoading = new BehaviorSubject < number > (null);
  public imagesLoading = 0;
  imagesLoading$ = this._imagesLoading.asObservable();
  private images: Map < HTMLElement, boolean > = new Map();


  imageLoading(img: HTMLElement) {
    if (!this.images.has(img) || this.images.get(img)) {
      this.images.set(img, false);
      this.imagesLoading++;
      this._imagesLoading.next(this.imagesLoading);
      if (this.imagesLoading == 0) {
        console.log('running loading controller');
      }
    }
  }

  imageLoadedOrError(img: HTMLElement) {
    if (this.images.has(img) && !this.images.get(img)) {
      this.images.set(img, true);
      this.imagesLoading--;
      this._imagesLoading.next(this.imagesLoading);
    }
  }
}
