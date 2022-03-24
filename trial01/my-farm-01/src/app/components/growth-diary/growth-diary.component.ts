import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-growth-diary',
  templateUrl: './growth-diary.component.html',
  styleUrls: ['./growth-diary.component.scss'],
})
export class GrowthDiaryComponent implements OnInit {
  @Input() itemId: number;
  constructor() {}

  ngOnInit() {}
}
