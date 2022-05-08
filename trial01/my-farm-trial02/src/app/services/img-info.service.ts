import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgInfoService {
  public _imgRGB = new BehaviorSubject < number > (null);
  public imgRGB = 0;

  constructor(private renderer: Renderer2,
    private el: ElementRef) {}

  // helper
  getAverageRGB(imgEl: HTMLElement) {

    let blockSize = 5; // only visit every 5 pixels
    let defaultRGB = {
      r: 0,
      g: 0,
      b: 0
    }; // for non-supporting envs
    let canvas = this.renderer.createElement('canvas');
    let context = canvas.getContext && canvas.getContext('2d');
    let data;
    let width;
    let height;
    let i = -4;
    let length;
    let rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    let count = 0;

    if (!context) {
      return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
    context.drawImage(imgEl, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      /* security error, img on diff domain */
      this._imgRGB.next(this.imgRGB);
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }

    rgb.r = Math.floor(rgb.r / count);
    rgb.g = Math.floor(rgb.g / count);
    rgb.b = Math.floor(rgb.b / count);

    this._imgRGB.next(this.imgRGB);
  }
}



