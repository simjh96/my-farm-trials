import { Injectable } from '@angular/core';
import { ItemDetail } from '../interface/item-detail';
import * as $ from 'jquery';
import { ItemAvatarDetail } from '../interface/item-avatar-detail';

@Injectable({
  providedIn: 'root',
})
export class ItemDetailService {
  public itemDetail: {
    itemAvatars: ItemAvatarDetail[];
    itemDetails: ItemDetail[];
  };

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
          title: '동글동글한 콜리플라워 500g',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi01.jpg',
          avatar: 'assets/images/contents/farm/farm01.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge01.png',
          farmer: 'assets/images/contents/farmer/farmer01.jpg',
          farmerId: 1,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 2,
          title: '신선한 친환경 오이 1+1',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi02.jpg',
          avatar: 'assets/images/contents/farm/farm02.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge02.png',
          farmer: 'assets/images/contents/farmer/farmer02.jpg',
          farmerId: 2,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 3,
          title: '싱싱한 당일재배 상추',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi03.jpg',
          avatar: 'assets/images/contents/farm/farm03.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge03.png',
          farmer: 'assets/images/contents/farmer/farmer03.jpg',
          farmerId: 3,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 4,
          title: '영양만점 브더콜리',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi04.jpg',
          avatar: 'assets/images/contents/farm/farm04.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge04.png',
          farmer: 'assets/images/contents/farmer/farmer04.jpg',
          farmerId: 4,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 5,
          title: '향긋한 무청 1박스',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi05.jpg',
          avatar: 'assets/images/contents/farm/farm05.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge05.png',
          farmer: 'assets/images/contents/farmer/farmer05.jpg',
          farmerId: 5,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 6,
          title: '녹차용 녹차잎파리 1박스 [당일재배]',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi06.jpg',
          avatar: 'assets/images/contents/farm/farm06.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge06.png',
          farmer: 'assets/images/contents/farmer/farmer06.jpg',
          farmerId: 6,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 7,
          title: '영양만점 미니 양상추',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi07.jpg',
          avatar: 'assets/images/contents/farm/farm07.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge07.png',
          farmer: 'assets/images/contents/farmer/farmer07.jpg',
          farmerId: 7,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 8,
          title: '강원도 햇 양파 1박스',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi08.jpg',
          avatar: 'assets/images/contents/farm/farm08.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge08.png',
          farmer: 'assets/images/contents/farmer/farmer08.jpg',
          farmerId: 8,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 9,
          title: '제천 명물 달콤 양파',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi09.jpg',
          avatar: 'assets/images/contents/farm/farm09.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge09.png',
          farmer: 'assets/images/contents/farmer/farmer09.jpg',
          farmerId: 9,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 10,
          title: '산나물명가 케일',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi10.jpg',
          avatar: 'assets/images/contents/farm/farm10.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge10.png',
          farmer: 'assets/images/contents/farmer/farmer10.jpg',
          farmerId: 10,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 11,
          title: '채소나라 채소왕자 상추',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi11.jpg',
          avatar: 'assets/images/contents/farm/farm11.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge11.png',
          farmer: 'assets/images/contents/farmer/farmer11.jpg',
          farmerId: 11,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
        {
          id: 12,
          title: '햇 호고박구마',
          cultivar: '킹스베리',
          description:
            '충남 논산에서 개발되었으며, 일반딸기의 2-3배 정도 크기를 자랑하며 당도 역시 일반딸기보다 2-3브릭스 높은 프리미엄 딸기입니다.',
          image: 'assets/images/contents/vegi/vegi12.jpg',
          avatar: 'assets/images/contents/farm/farm12.jpg',
          avatarTitle: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          btFollowing: '구독중',
          badge: 'assets/images/contents/badge/badge12.png',
          farmer: 'assets/images/contents/farmer/farmer12.jpg',
          farmerId: 12,
          afterHarvest: '2~7일',
          brix: '9~10brix',
          weight: '25~30g',
          certi: '무농약',
        },
      ],
    };
  }

  getItemDetail(itemId: number) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    const result = $(this.itemDetail.itemDetails).filter(function (_i, n) {
      return n['id'] === itemId;
    });
    return result[0];
  }

  getAllItemDetail() {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions

    return this.itemDetail.itemDetails;
  }
}
