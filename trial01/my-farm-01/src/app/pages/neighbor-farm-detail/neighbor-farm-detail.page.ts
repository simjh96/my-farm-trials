import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-neighbor-farm-detail',
  templateUrl: './neighbor-farm-detail.page.html',
  styleUrls: ['./neighbor-farm-detail.page.scss'],
})
export class NeighborFarmDetailPage implements OnInit {
  itemId: number;
  constructor(private route: ActivatedRoute) {
    // set ithItemDetail
    this.itemId = +this.route.snapshot.paramMap.get('itemId');
  }

  ngOnInit() {}
}
