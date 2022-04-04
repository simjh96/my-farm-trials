import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {
  AlertController,
  IonInfiniteScroll,
  NavController,
} from '@ionic/angular';
import { FarmerDetail } from 'src/app/interface/farmer-detail';
import { ItemDetail } from 'src/app/interface/item-detail';
import { FarmerDetailService } from 'src/app/services/farmer-detail.service';
import { ItemDetailService } from 'src/app/services/item-detail.service';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-growth-diary',
  templateUrl: './growth-diary.component.html',
  styleUrls: ['./growth-diary.component.scss'],
})
export class GrowthDiaryComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @Input() itemId: number;
  ithItemDetail: ItemDetail;
  ithFarmerDetail: FarmerDetail;
  idxs: number[];
  fin: boolean;
  constructor(
    private itemDetailService: ItemDetailService,
    private farmerDetailService: FarmerDetailService,
    private navController: NavController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.ithItemDetail = this.itemDetailService.getItemDetail(this.itemId);
    this.ithFarmerDetail = this.farmerDetailService.getFarmerDetail(
      this.ithItemDetail.farmerId
    );
    this.idxs = [1, 2, 3, 4];
    this.fin = false;
  }
  loadData(event) {
    setTimeout(() => {
      for (let i = 0; i < 4; i++) {
        this.idxs.push(this.idxs.length + 1);
      }
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.idxs.length > 20) {
        this.fin = true;
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
}
