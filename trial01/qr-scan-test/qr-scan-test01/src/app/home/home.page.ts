import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import QrScanner from 'qr-scanner/qr-scanner.min.js';
// https://www.npmjs.com/package/qr-scanner

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild('videoElem') videoElem: ElementRef;
  @ViewChild('imageElem') imageElem: ElementRef;
  constructor(private data: DataService) {

  }
  async ngAfterViewInit() {

  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  onClick() {
    console.log('clicked');
  }

}
