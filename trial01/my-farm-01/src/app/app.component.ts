import {
  Component
} from '@angular/core';
import {
  NavController
} from '@ionic/angular';
import {
  PageDetail
} from './interface/page-detail';
import {
  AuthService
} from './services/auth.service';
import {
  environment
} from 'src/environments/environment';
declare let Kakao: any;

Kakao.init('f513d5ff87bae79fd73c9abd045cb000');
// if (environment['KAKAO_JS_KEY']) {
//   Kakao.init(environment['KAKAO_JS_KEY']);
// }

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
  constructor(private navController: NavController, private auth: AuthService) {
    this.appPages = [{
        url: 'review-search',
        title: '리뷰 검색 (완)',
        theme: 'search-bar-simple',
        icon: 'chevron-forward-circle',
        listView: true,
        component: '["search-bar-simple","item-list","footer"]',
        singlePage: true,
      },
      {
        url: 'review-write/1',
        title: '리뷰 작성 (완)',
        theme: 'textarea',
        icon: 'chevron-forward-circle',
        listView: true,
        component: '["item-detail","chip-slider","footer"]',
        singlePage: true,
      },
      {
        url: 'farm-of-month',
        title: '이달의 농장 작성중...',
        theme: 'magazine',
        icon: 'chevron-forward-circle',
        listView: true,
        component: '[]',
        singlePage: true,
      },
      {
        url: 'neighbor-farm-detail/1',
        title: '이웃농장 상세 구상중...',
        theme: 'data-visualization',
        icon: 'chevron-forward-circle',
        listView: true,
        component: '[]',
        singlePage: true,
      },

    ];
  }
  openPage(url: string) {
    this.navController.navigateRoot([url], {});
  }
}
