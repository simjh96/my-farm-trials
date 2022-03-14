import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar-simple',
  templateUrl: './search-bar-simple.component.html',
  styleUrls: ['./search-bar-simple.component.scss'],
})
export class SearchBarSimpleComponent implements OnInit {
  items: any;

  constructor() {
    this.items = {
      items: [
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

  ngOnInit() {}
}
