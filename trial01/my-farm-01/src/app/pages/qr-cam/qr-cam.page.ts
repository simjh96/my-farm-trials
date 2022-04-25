import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import {
  ToastController,
  LoadingController,
  Platform,
  NavController
} from '@ionic/angular';
import jsQR from 'jsqr';

@Component({
  selector: 'app-qr-cam',
  templateUrl: './qr-cam.page.html',
  styleUrls: ['./qr-cam.page.scss'],
})
export class QrCamPage implements AfterViewInit {
  @ViewChild('video', {
    static: false
  }) video: ElementRef;
  @ViewChild('canvas', {
    static: false
  }) canvas: ElementRef;
  @ViewChild('fileinput', {
    static: false
  }) fileinput: ElementRef;

  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;
  loading: HTMLIonLoadingElement = null;
  isIos = false;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    public plt: Platform,
    private navController: NavController
  ) {
    const isInStandaloneMode = () =>
      'standalone' in window.navigator && window.navigator['standalone'];
    if (this.plt.is('ios') && isInStandaloneMode()) {
      console.log('I am a an iOS PWA!');
      this.isIos = true;
    }
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;

    this.startScan();
  }

  // Helper functions
  async showQrToast() {
    const toast = await this.toastCtrl.create({
      message: `${this.scanResult} 페이지를 열까요?`,
      position: 'top',
      buttons: [{
        text: '이동',
        handler: () => {
          // nav to plant info
          this.openPage('/neighbor-farm-detail/' + Math.ceil(Math.random()*10));
          // window.open(this.scanResult, '_system', 'location=yes');
          this.toastCtrl.dismiss();
        }
      }]
    });
    toast.present();
  }

  async startScan() {
    // Not working on iOS standalone mode!
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'environment'
      }
    });

    this.videoElement.srcObject = stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);

    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();

    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }

  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }

      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;

      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'invertFirst'
      });

      if (code && code.data) {
        console.log(code.data);
        this.scanActive = false;
        this.scanResult = code.data;
        this.showQrToast();
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  reset() {
    this.scanResult = null;
    this.toastCtrl.dismiss();
    this.startScan();
  }

    openPage(url: string) {
    this.navController.navigateForward(url, {});
  }
}
