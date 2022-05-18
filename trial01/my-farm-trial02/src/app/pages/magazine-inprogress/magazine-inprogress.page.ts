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
  public allMagazineDetails;

  constructor(private magazineDetailService: MagazineDetailService, private navController: NavController) {
    // set all magazineDetails
    this.allMagazineDetails = magazineDetailService.getAllMagazineDetail();
    console.log(this.allMagazineDetails);
  }

  ngOnInit() {}
  openPage(url: string) {
    console.log(`open page ${url}`);
    // this.navController.navigateForward(url, {});
  }
}
