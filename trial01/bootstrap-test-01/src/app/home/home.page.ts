import { Component } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  model: NgbDateStruct;
  date: {
    year: number;
    month: number;
  };
  constructor(private calendar: NgbCalendar) {}
  selectToday() {
    this.model = this.calendar.getToday();
  }
}
