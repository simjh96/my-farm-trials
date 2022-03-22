import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.page.html',
  styleUrls: ['./review-detail.page.scss'],
})
export class ReviewDetailPage implements OnInit {
  private itemId: string;
  constructor(private route: ActivatedRoute) {
    this.itemId = this.route.snapshot.paramMap.get('itemId');
  }

  ngOnInit() {}
}
