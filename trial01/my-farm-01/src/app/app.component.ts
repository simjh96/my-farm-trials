import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [];
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
    ];
  }
  openPage(page) {
    this.navController.navigateRoot([page.url], {});
  }
}
