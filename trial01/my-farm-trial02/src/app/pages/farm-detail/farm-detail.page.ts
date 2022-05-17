import {
  Component,
  OnInit,
} from '@angular/core';
import { FarmerDetailService } from 'src/app/services/farmer-detail.service';

@Component({
  selector: 'app-farm-detail',
  templateUrl: './farm-detail.page.html',
  styleUrls: ['./farm-detail.page.scss'],
})
export class FarmDetailPage implements OnInit {
  public farmerId: number;
  public ithFarmerDetail;

  constructor(
    private farmerDetailService: FarmerDetailService
  ) {

    // set ithItemDetail
    this.farmerId = 1;
    this.ithFarmerDetail = farmerDetailService.getFarmerDetail(this.farmerId);
    console.log(this.ithFarmerDetail);
  }

  ngOnInit() {}


}
