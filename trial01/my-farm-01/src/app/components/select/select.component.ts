import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnChanges {
  @Output() onChange = new EventEmitter();
  data;
  constructor() {
    this.data = {
      headerTitle: 'Single Select',
      title: '필터',
      selectedItem: 1,
      header: 'Basic dialog',
      items: [
        {
          id: 1,
          title: '최신순',
        },
        {
          id: 2,
          title: '조회순',
        },
        {
          id: 3,
          title: '인기순',
        },
        {
          id: 4,
          title: '구독순',
        },
      ],
    };
  }
  ngOnChanges(changes: { [propKey: string]: any }) {
    console.log('changes: ', changes);
  }

  onChangeFunc(event) {
    if (event) {
      event.stopPropagation();
    }
    console.log('event: ', event);
    this.data.selectedItem = event.target.value;
    this.onChange.emit(event.target.value);
  }
}
