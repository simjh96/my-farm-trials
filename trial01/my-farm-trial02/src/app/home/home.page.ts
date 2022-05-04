import { Component } from '@angular/core';
import { ImgLoadingService } from '../services/img-loading.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public imgLoadingService: ImgLoadingService
  ) {}

}
