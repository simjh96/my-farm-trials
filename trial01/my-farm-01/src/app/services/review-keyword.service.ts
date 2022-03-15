import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewKeywordService {
  private keywords;
  constructor() {
    this.keywords = {
      type01: [
        '달아요',
        '상큼해요',
        '잘 익었어요',
        '새콤해요',
        '신선해요',
        '알차요',
      ],
      type02: ['가격이 적당해요', '포장이 꼼꼼해요', '판매자가 친절해요'],
      type03: ['또 먹고 싶어요', '또 샀어요', '아이가 좋아해요', '선물했어요'],
    };
  }
  getReviewKeywords(type: string): string[] {
    return this.keywords[type];
  }
}
