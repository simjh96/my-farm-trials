import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-search',
  templateUrl: './review-search.page.html',
  styleUrls: ['./review-search.page.scss'],
})
export class ReviewSearchPage implements OnInit {
  public cardWide: boolean;
  constructor() {
    this.cardWide = true;
  }

  ngOnInit() {}
}
