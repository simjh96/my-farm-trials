import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { FakeTabInput } from 'src/app/interface/fake-tab-input';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-neighbor-farm-detail',
  templateUrl: './neighbor-farm-detail.page.html',
  styleUrls: ['./neighbor-farm-detail.page.scss'],
})
export class NeighborFarmDetailPage implements OnInit {
  public initialTab = true;
  public currentTab: Subject<string> = new Subject();
  itemId: number;
  tabInput: FakeTabInput;
  constructor(
    private route: ActivatedRoute,
    private itemDetailService: ItemDetailService
  ) {
    this.itemId = +this.route.snapshot.paramMap.get('itemId');
    this.tabInput = {
      title: '이웃농장',
      type: 'back',
      tabs: [
        { url: 'farm-data', icon: 'analytics', label: '농장 데이터' },
        { url: 'growth-diary', icon: 'clipboard', label: '재배일지' },
      ],
    };
  }

  ngOnInit() {}

  tabChange(newTab: string) {
    this.currentTab.next(newTab);
    this.initialTab = false;
  }
}
