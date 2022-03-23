import { Component, Input, OnInit } from '@angular/core';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-farm-data',
  templateUrl: './farm-data.page.html',
  styleUrls: ['./farm-data.page.scss'],
})
export class FarmDataPage implements OnInit {
  @Input() itemId: number;
  ithItemDetail;
  constructor(private itemDetailService: ItemDetailService) {}

  ngOnInit() {
    this.ithItemDetail = this.itemDetailService.getItemDetail(this.itemId);
  }
}
