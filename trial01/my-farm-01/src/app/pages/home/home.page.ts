import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { FakeTabInput } from 'src/app/interface/fake-tab-input';
import { ItemAvatarDetail } from 'src/app/interface/item-avatar-detail';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public initialTab = true;
  public currentTab: Subject<string> = new Subject();
  public tabInput: FakeTabInput;

  constructor() {
    this.tabInput = {
      title: '홈메뉴',
      type: 'menu',
      tabs: [
        { url: 'default-home', icon: 'home', label: '홈' },
        { url: 'neighbor-farm', icon: 'leaf', label: '이웃농장' },
        { url: 'my-farm', icon: 'person', label: '마이농장' },
      ],
    };
  }
  ngOnInit() {
    this.currentTab.next('default-home');
  }

  tabChange(newTab: string) {
    this.currentTab.next(newTab);
    this.initialTab = false;
  }
}
