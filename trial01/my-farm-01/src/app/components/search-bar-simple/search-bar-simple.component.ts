import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-search-bar-simple',
  templateUrl: './search-bar-simple.component.html',
  styleUrls: ['./search-bar-simple.component.scss'],
})
export class SearchBarSimpleComponent implements OnInit {
  items: any;

  constructor(
    public navController: NavController,
    public itmeDetailService: ItemDetailService
  ) {
    this.items = itmeDetailService.itemDetail;
  }

  ngOnInit() {}

  openPage(url: string) {
    this.navController.navigateForward(url, {});
  }
}
