import { Component, OnInit } from '@angular/core';
import { ItemAvatarDetail } from 'src/app/interface/item-avatar-detail';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.page.html',
  styleUrls: ['./default-home.page.scss'],
})
export class DefaultHomePage implements OnInit {
  public items: ItemAvatarDetail[];
  constructor(public itemDetailService: ItemDetailService) {
    this.items = itemDetailService.itemDetail.itemAvatars;
  }

  ngOnInit() {}
}
