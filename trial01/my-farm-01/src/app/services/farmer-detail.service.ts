import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import { FarmerDetail } from '../interface/farmer-detail';

@Injectable({
  providedIn: 'root',
})
export class FarmerDetailService {
  public farmerDetail: {
    farmerDetails: FarmerDetail[];
  };
  constructor() {
    this.farmerDetail = {
      farmerDetails: [
        {
          id: 1,
          farmImg: 'assets/images/contents/farm/farm01.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge01.png',
          image: 'assets/images/contents/farmer/farmer01.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 2,
          farmImg: 'assets/images/contents/farm/farm02.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge02.png',
          image: 'assets/images/contents/farmer/farmer02.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 3,
          farmImg: 'assets/images/contents/farm/farm03.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge03.png',
          image: 'assets/images/contents/farmer/farmer03.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 4,
          farmImg: 'assets/images/contents/farm/farm04.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge04.png',
          image: 'assets/images/contents/farmer/farmer04.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 5,
          farmImg: 'assets/images/contents/farm/farm05.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge05.png',
          image: 'assets/images/contents/farmer/farmer05.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 6,
          farmImg: 'assets/images/contents/farm/farm06.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge06.png',
          image: 'assets/images/contents/farmer/farmer06.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 7,
          farmImg: 'assets/images/contents/farm/farm07.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge07.png',
          image: 'assets/images/contents/farmer/farmer07.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 8,
          farmImg: 'assets/images/contents/farm/farm08.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge08.png',
          image: 'assets/images/contents/farmer/farmer08.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 9,
          farmImg: 'assets/images/contents/farm/farm09.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge09.png',
          image: 'assets/images/contents/farmer/farmer09.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 10,
          farmImg: 'assets/images/contents/farm/farm10.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge10.png',
          image: 'assets/images/contents/farmer/farmer10.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 11,
          farmImg: 'assets/images/contents/farm/farm11.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge11.png',
          image: 'assets/images/contents/farmer/farmer11.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
        {
          id: 12,
          farmImg: 'assets/images/contents/farm/farm12.jpg',
          title: '김농부씨',
          avatarSubTitle: '농장배지 100개 보유중',
          follower: 0,
          badge: 'assets/images/contents/badge/badge12.png',
          image: 'assets/images/contents/farmer/farmer12.jpg',
          description:
            '논산에서 40년 넘게 딸기 농사만 해온 베테랑 부모님과 함께 킹스베리를 생산하기 시작했어요. 우리 가족이 먹는다는 마음으로 키운 딸기랍니다. ',
          location: '충남 논산시 00농원',
          locationDesc:
            '딸기의 고장 논산은 땅이 비옥하고 일조량이 풍부해 딸기 생산에 적합한 지역입니다. 수경재배 농법으로 땅이 아닌 공중에서 재배되어, 호박벌을 통해 자연수정 되면 킹스베리가 열립니다.',
        },
      ],
    };
  }

  getFarmerDetail(itemId: number) {
    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    const result = $(this.farmerDetail.farmerDetails).filter(function (_i, n) {
      return +n['id'] === itemId;
    });
    return result[0] as unknown as FarmerDetail;
  }
  getAllFarmerDetail() {
    return this.farmerDetail.farmerDetails;
  }
}
