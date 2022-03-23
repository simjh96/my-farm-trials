import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ItemDetail } from 'src/app/interface/item-detail';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() cardWide: boolean;
  items: ItemDetail[];

  constructor(
    public navController: NavController,
    public itemDetailService: ItemDetailService
  ) {
    this.items = itemDetailService.getAllItemDetail();
    this.cardWide = true;
  }

  ngOnInit() {}

  openPage(url: string) {
    console.log(url);
    this.navController.navigateForward(url, {});
  }
}
