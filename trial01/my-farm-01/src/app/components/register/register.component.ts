import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private idChecked = false;
  constructor(
    private auth: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  async onSubmit(f: NgForm) {
    let access_token = this.auth.kakaoAuth.value;
    console.log('in onsubmit access_token: ' + access_token);
    console.log(f.value);
    if (f.value.nickname === '' || f.value.password === '') {
      this.alertCtrl
        .create({
          header: '알림',
          message: '빈칸이 있습니다!',
          buttons: ['확인'],
        })
        .then((alert) => alert.present());
    } else if (!this.idChecked) {
      this.alertCtrl
        .create({
          header: '알림',
          message: '이미 다른분이 사용중인 닉네임입니다!',
          buttons: ['확인'],
        })
        .then((alert) => alert.present());
    } else {
      // register
      let count = this.auth.joinEnd(
        this.auth.kakaopk,
        f.value.nickname,
        f.value.password
      );
      console.log(await count.toPromise());
    }
  }

  async checkId(i: any) {
    let count = this.auth.idCheck(i.value);
    if ((await count.toPromise()) == 0) {
      this.idChecked = true;
    } else {
      this.idChecked = false;
      this.alertCtrl
        .create({
          header: '알림',
          message: '이미 다른분이 사용중인 닉네임입니다!',
          buttons: ['확인'],
        })
        .then((alert) => alert.present());
    }
  }
}
