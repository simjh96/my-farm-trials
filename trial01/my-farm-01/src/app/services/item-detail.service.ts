import { Injectable } from '@angular/core';
import { ItemDetail } from '../interface/item-detail';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class ItemDetailService {
  public itemDetail;

  constructor() {
    this.itemDetail = {
      itemAvatars: [
        {
          id: 1,
          title: '채소1',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi01.jpg',
        },
        {
          id: 2,
          title: '채소2',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi02.jpg',
        },
        {
          id: 3,
          title: '채소3',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi03.jpg',
        },
        {
          id: 4,
          title: '채소4',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi04.jpg',
        },
        {
          id: 5,
          title: '채소5',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi05.jpg',
        },
        {
          id: 6,
          title: '채소6',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi06.jpg',
        },
        {
          id: 7,
          title: '채소7',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi07.jpg',
        },
        {
          id: 8,
          title: '채소8',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi08.jpg',
        },
        {
          id: 9,
          title: '채소9',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi09.jpg',
        },
        {
          id: 2,
          title: '채소1',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi10.jpg',
        },
        {
          id: 3,
          title: '채소1',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi11.jpg',
        },
        {
          id: 4,
          title: '채소1',
          subtitle: '맛나는 채소의 세계',
          image: 'assets/images/contents/vegi/vegi12.jpg',
        },
      ],
      itemDetails: [
        {
          id: 1,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi01.jpg',
          avatar: 'assets/images/contents/farm/farm01.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge01.png',
        },
        {
          id: 2,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi02.jpg',
          avatar: 'assets/images/contents/farm/farm02.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge02.png',
        },
        {
          id: 3,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi03.jpg',
          avatar: 'assets/images/contents/farm/farm03.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge03.png',
        },
        {
          id: 4,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi04.jpg',
          avatar: 'assets/images/contents/farm/farm04.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge04.png',
        },
        {
          id: 5,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi05.jpg',
          avatar: 'assets/images/contents/farm/farm05.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge05.png',
        },
        {
          id: 6,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi06.jpg',
          avatar: 'assets/images/contents/farm/farm06.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge06.png',
        },
        {
          id: 7,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi07.jpg',
          avatar: 'assets/images/contents/farm/farm07.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge07.png',
        },
        {
          id: 8,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi08.jpg',
          avatar: 'assets/images/contents/farm/farm08.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge08.png',
        },
        {
          id: 9,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi09.jpg',
          avatar: 'assets/images/contents/farm/farm09.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge09.png',
        },
        {
          id: 10,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi10.jpg',
          avatar: 'assets/images/contents/farm/farm10.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge10.png',
        },
        {
          id: 11,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi11.jpg',
          avatar: 'assets/images/contents/farm/farm11.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge11.png',
        },
        {
          id: 12,
          title: '상품명',
          description: '해당 상품의 자세한 데이터를 알려주는 문구',
          image: 'assets/images/contents/vegi/vegi12.jpg',
          avatar: 'assets/images/contents/farm/farm12.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge12.png',
        },
      ],
    };
  }

  getItemDetail(itemId: number) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    const result = $(this.itemDetail.itemDetails).filter(function (_i, n) {
      return +n.id === itemId;
    });
    return result[0];
  }
}
