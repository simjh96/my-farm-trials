import { Component, Input, OnInit } from '@angular/core';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  @Input() ithItemDetail;
  constructor() {}

  ngOnInit() {}
}
