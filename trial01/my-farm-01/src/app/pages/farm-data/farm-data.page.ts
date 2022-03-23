import { Component, Input, OnInit } from '@angular/core';
import { FarmerDetail } from 'src/app/interface/farmer-detail';
import { ItemDetail } from 'src/app/interface/item-detail';
import { FarmerDetailService } from 'src/app/services/farmer-detail.service';
import { ItemDetailService } from 'src/app/services/item-detail.service';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import { AlertController, NavController } from '@ionic/angular';
// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-farm-data',
  templateUrl: './farm-data.page.html',
  styleUrls: ['./farm-data.page.scss'],
})
export class FarmDataPage implements OnInit {
  @Input() itemId: number;
  ithItemDetail: ItemDetail;
  ithFarmerDetail: FarmerDetail;
  constructor(
    private itemDetailService: ItemDetailService,
    private farmerDetailService: FarmerDetailService,
    private navController: NavController,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.ithItemDetail = this.itemDetailService.getItemDetail(this.itemId);
    this.ithFarmerDetail = this.farmerDetailService.getFarmerDetail(
      this.ithItemDetail.farmerId
    );
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '브릭스(brix)가 뭔가요?',
      subHeader: '',
      message: `<p>브릭스는 과일의 당도를 측정하는 단위로,
 100g의 용액 속에 들어있는 당의 g수를 뜻합니다.
 사과 당도가 15brix라고 하면,
 사과 100g당 15g의 당이 들어있다는 뜻이죠.</p>

      <p><strong>9brix 미만 : 보통 당도<br/>
      9~11brix : 높은 당도<br/>
      11brix 이상 : 매우 높은 당도</strong></p>

      <p>
      최근에는 비파괴 당도계를 이용해 과일을
      착즙하지 않고도 당도를 측정할 수 있습니다.</p>`,
      buttons: ['닫기'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  openPage(url: string) {
    this.navController.navigateForward(url, {});
  }
}
