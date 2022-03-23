import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-growth-diary',
  templateUrl: './growth-diary.page.html',
  styleUrls: ['./growth-diary.page.scss'],
})
export class GrowthDiaryPage implements OnInit {
  @Input() itemId: number;
  constructor() {}

  ngOnInit() {}
}
