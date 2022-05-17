import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MagazineDetailService } from 'src/app/services/magazine-detail.service';

@Component({
  selector: 'app-magazine-inprogress',
  templateUrl: './magazine-inprogress.page.html',
  styleUrls: ['./magazine-inprogress.page.scss'],
})
export class MagazineInprogressPage implements OnInit {
  public magazineId: number;
  public ithMagazineDetail;

  constructor(private magazineDetailService: MagazineDetailService, private navController: NavController) {
    // set ithItemDetail
    this.magazineId = 1;
    this.ithMagazineDetail = magazineDetailService.getMagazineDetail(
      this.magazineId
    );
    console.log(this.ithMagazineDetail);
  }

  ngOnInit() {}
  openPage(url: string) {
    console.log(`open page ${url}`);
    // this.navController.navigateForward(url, {});
  }
}
