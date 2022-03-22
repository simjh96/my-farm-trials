import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
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

  constructor() {}
  ngOnInit() {
    this.currentTab.next('default-home');
  }

  tabChange(newTab: string) {
    console.log(newTab);
    this.currentTab.next(newTab);
    this.initialTab = false;
  }
}
