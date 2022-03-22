import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewKeywordService {
  private keywords;
  constructor() {
    this.keywords = {
      type01: [
        ['달아요', 'star-outline'],
        ['상큼해요', 'star-half-outline'],
        ['잘 익었어요', 'snow-outline'],
        ['새콤해요', 'share-outline'],
        ['신선해요', 'search-circle-outline'],
        ['알차요', 'stats-chart-outline'],
      ],
      type02: [
        ['가격이 적당해요', 'shirt-outline'],
        ['포장이 꼼꼼해요', 'shapes-outline'],
        ['판매자가 친절해요', 'pizza-outline'],
      ],
      type03: [
        ['또 먹고 싶어요', 'people-circle-outline'],
        ['또 샀어요', 'paw-outline'],
        ['아이가 좋아해요', 'person-circle-outline'],
        ['선물했어요', 'notifications-outline'],
      ],
    };
  }
  getReviewKeywords(type: string): Array<string> {
    return this.keywords[type];
  }
  getAllReviewKeywords() {
    const result = {};
    Object.assign(result, this.keywords);
    return result;
  }
}
