import { MapsAPILoader, AgmMap } from '@agm/core';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ItemDetailService } from 'src/app/services/item-detail.service';

// import Swiper core and required modules
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss'],
})
export class DefaultHomeComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 2.2,
    spaceBetween: 10,
    pagination: null,
    navigation: null,
  };

  title = 'AGM project';
  latitudes: number[];
  longitudes: number[];
  zoom: number;
  cnt: number;
  constructor(
    public itemDetailService: ItemDetailService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private navController: NavController
  ) {
    //set latitude, longitude and zoom
    this.cnt = 3;
    this.latitudes = [
      37.566469829817876, 37.576469829817876, 37.586469829817876,
    ];
    this.longitudes = [127.0902720644886, 127.1102720644886, 127.1002720644886];
    this.zoom = 12;
  }

  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {});
  }
    openPage(url: string) {
    this.navController.navigateForward(url, {});
  }
}
