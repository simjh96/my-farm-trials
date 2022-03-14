import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDetail } from 'src/app/interface/item-detail';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-review-write',
  templateUrl: './review-write.page.html',
  styleUrls: ['./review-write.page.scss'],
})
export class ReviewWritePage implements OnInit {
  private itemId: number;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  itemDetail: ItemDetail;

  constructor(
    private route: ActivatedRoute,
    public itemDetailService: ItemDetailService
  ) {
    this.itemId = +this.route.snapshot.paramMap.get('itemId');
    this.itemDetail = itemDetailService.getItemDetail[this.itemId];
  }
  ngOnInit() {}
}
