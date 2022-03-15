import { Injectable } from '@angular/core';
import { ItemDetail } from '../interface/item-detail';

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
    };
  }

  getItemDetail(itemId: number): ItemDetail {
    return this.itemDetail[itemId];
  }
}
