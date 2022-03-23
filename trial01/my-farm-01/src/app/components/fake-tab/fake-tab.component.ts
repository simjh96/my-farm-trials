import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FakeTabInput } from 'src/app/interface/fake-tab-input';

@Component({
  selector: 'app-fake-tab',
  templateUrl: './fake-tab.component.html',
  styleUrls: ['./fake-tab.component.scss'],
})
export class FakeTabComponent implements OnInit {
  @Output() tabChange = new EventEmitter();
  @Input() tabInput: FakeTabInput;
  constructor() {
    console.log(this.tabInput);
  }

  ngOnInit() {}

  onTabChange(tabTitle: string) {
    this.tabChange.emit(tabTitle);
  }
}
