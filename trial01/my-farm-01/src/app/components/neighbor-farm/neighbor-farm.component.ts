import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { ItemDetail } from 'src/app/interface/item-detail';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-neighbor-farm',
  templateUrl: './neighbor-farm.component.html',
  styleUrls: ['./neighbor-farm.component.scss'],
})
export class NeighborFarmComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  ithItemDetail: ItemDetail;
  idxs: number[];
  fin: boolean;

  constructor(
    public itemDetailService: ItemDetailService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.ithItemDetail = this.itemDetailService.getItemDetail(2);
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
      if (this.idxs.length > 10) {
        this.fin = true;
        event.target.disabled = true;
      }
    }, 500);
  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  onChange(param): void {
    // 실제로 쿼리 로직 구현필요
    this.idxs.unshift(param * 2);
    this.idxs.unshift(param * 2 + 1);
    this.idxs.unshift(param * 2 + 2);
    this.idxs.pop();
    this.idxs.pop();
    this.idxs.pop();
  }

  openPage(url: string) {
    this.navController.navigateForward(url, {});
  }

  onFollow(params): void {
    console.log('clicked following: ', params);
    if (params.btFollowing == '구독하기') {
      params.btFollowing = '구독중';
    } else {
      params.btFollowing = '구독하기';
    }
  }
}
