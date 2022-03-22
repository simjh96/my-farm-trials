import { MapsAPILoader, AgmMap } from '@agm/core';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  NgZone,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ItemAvatarDetail } from 'src/app/interface/item-avatar-detail';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.page.html',
  styleUrls: ['./default-home.page.scss'],
})
export class DefaultHomePage implements OnInit {
  public items: ItemAvatarDetail[];
  title = 'AGM project';
  latitudes: number[];
  longitudes: number[];
  zoom: number;
  cnt: number;

  constructor(
    public itemDetailService: ItemDetailService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.items = itemDetailService.itemDetail.itemAvatars;
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
}
