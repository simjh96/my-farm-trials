import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chip-sliders',
  templateUrl: './chip-sliders.component.html',
  styleUrls: ['./chip-sliders.component.scss'],
})
export class ChipSlidersComponent implements OnInit {
  @Input() keys;
  @Input() reviewKeywords;

  constructor() {}

  ngOnInit() {}
}
