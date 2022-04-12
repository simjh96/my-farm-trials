import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-farm-in',
  templateUrl: './my-farm-in.component.html',
  styleUrls: ['./my-farm-in.component.scss'],
})
export class MyFarmInComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}
}
