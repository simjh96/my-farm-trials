import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { ItemDetail } from 'src/app/interface/item-detail';
import { ItemDetailService } from 'src/app/services/item-detail.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnChanges {
  @Input() ithItemDetail: ItemDetail;

  // 해당 scope에 있는 객체의 주소값을 발송하고 parent module에서 조작 한 후 onChange를 통해 자식이 다시 동기화
  @Output() onItemClick = new EventEmitter();
  @Output() onFollow = new EventEmitter();

  constructor() {}

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.ithItemDetail = changes.ithItemDetail.currentValue;
  }

  onItemClickFunc(event) {
    if (event) {
      event.stopPropagation();
    }

    console.log('clicked inner event: ', event);
    this.onItemClick.emit(this.ithItemDetail);
  }

  onFollowFunc(event) {
    if (event) {
      event.stopPropagation();
    }

    console.log('clicked inner event: ', event);
    this.onFollow.emit(this.ithItemDetail);
  }
}
