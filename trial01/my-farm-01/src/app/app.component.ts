import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PageDetail } from './interface/page-detail';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages: PageDetail[];
  headerMenuItem = {
    image: '',
    title: '',
    description: '',
  };
  constructor(private navController: NavController) {
    this.appPages = [
      {
        url: 'review-search',
        title: '리뷰 검색 진행중...',
        theme: 'search-bar-simple',
        icon: 'chevron-forward-circle',
        listView: true,
        component: '',
        singlePage: false,
      },
      {
        url: 'review-write/0',
        title: '리뷰 작성 진행중...',
        theme: 'textarea',
        icon: 'chevron-forward-circle',
        listView: true,
        component: '',
        singlePage: false,
      },
      {
        url: 'review-detail/0',
        title: '리뷰 상세 구상중...',
        theme: 'item-detail',
        icon: 'chevron-forward-circle',
        listView: true,
        component: '',
        singlePage: false,
      },
    ];
  }
  openPage(url: string) {
    this.navController.navigateRoot([url], {});
  }
}
