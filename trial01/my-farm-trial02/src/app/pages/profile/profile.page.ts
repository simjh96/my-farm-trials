import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FakeTabInput } from 'src/app/interface/fake-tab-input';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public initialTab = true;
  public currentTab: Subject<string> = new Subject();
  public tabInput: FakeTabInput;

  constructor() {}
  ngOnInit() {
    this.currentTab.next('writes');
    this.tabInput = {
      type: 'menu',
      tabs: [
        { url: 'writes', icon: 'home', label: '홈' },
        { url: 'seeds', icon: 'leaf', label: '이웃농장' },
        { url: 'exps', icon: 'person', label: '마이농장' },
        { url: 'scraps', icon: 'person', label: '마이농장' },
      ],
    };
  }

  tabChange(newTab: string) {
    this.currentTab.next(newTab);
    this.initialTab = false;
  }
}
