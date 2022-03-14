import { Injectable } from '@angular/core';
import { ItemDetail } from '../interface/item-detail';

@Injectable({
  providedIn: 'root',
})
export class ItemDetailService {
  public itemDetail;
  constructor() {
    this.itemDetail = {
      items: [
        {
          id: 1,
          title: '과일1',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/01.png',
        },
        {
          id: 2,
          title: '과일2',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/02.png',
        },
        {
          id: 3,
          title: '과일3',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/03.png',
        },
        {
          id: 4,
          title: '과일4',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/04.png',
        },
        {
          id: 1,
          title: '과일1',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/01.png',
        },
        {
          id: 2,
          title: '과일1',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/02.png',
        },
        {
          id: 3,
          title: '과일1',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/03.png',
        },
        {
          id: 4,
          title: '과일1',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/04.png',
        },
        {
          id: 1,
          title: '과일1',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/01.png',
        },
        {
          id: 2,
          title: '과일1',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/02.png',
        },
        {
          id: 3,
          title: '과일1',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/03.png',
        },
        {
          id: 4,
          title: '과일1',
          subtitle: '맛나는 과일의 세계',
          image: 'assets/img/04.png',
        },
      ],
    };
  }

  getItemDetail(itemId: number): ItemDetail {
    return this.itemDetail[itemId];
  }
}
