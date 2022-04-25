import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-more',
  templateUrl: './no-more.page.html',
  styleUrls: ['./no-more.page.scss'],
})
export class NoMorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(e) {console.log(e);}
}
