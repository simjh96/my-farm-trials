import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
declare let Kakao: any;

console.log('kakao initialized? : ' + Kakao.isInitialized());
@Component({
  selector: 'app-my-farm',
  templateUrl: './my-farm.component.html',
  styleUrls: ['./my-farm.component.scss'],
})
export class MyFarmComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    console.log(this.auth.user);
    this.auth.login(f.value).subscribe();
  }

  // kakao를 통한 회원가입 관련
  kakaoLogin() {
    Kakao.Auth.login({
      success: async (response) => {
        console.log(response);
        let accessToken = response.access_token;
        let rest_token = '3829a14694ef09f4dd5c3d5307e22b60';
        let redirect_uri =
          'http://localhost:8090/spring-jwt-test01/kakao-redirect-test';

        // join with auth first
        let joinStartValue = await this.auth.joinStart(accessToken).toPromise();
        console.log(joinStartValue);

        if ((joinStartValue as any) == 1) {
          this.auth.kakaoAuth.next(accessToken);
        } else if ((joinStartValue as any) == 0) {
          this.alertCtrl
            .create({
              header: '알림',
              message: '빈칸이 있습니다!',
              buttons: ['확인'],
            })
            .then((alert) => alert.present());
          this.router.navigateByUrl('/');
        }

        // pk by kakao id
        Kakao.API.request({
          url: '/v2/user/me',
          success: (res) => {
            console.log(res);
            this.auth.kakaopk = res.id;
            this.auth.userInfo.kakaothumb = res.properties.thumbnail_image;
            this.auth.userInfo.kakaoname = res.properties.nickname;
            this.kakaoLogout();
          },
          fail: (error) => {
            console.log(error);
          },
        });
      },
      fail: (error) => {
        console.log(error);
      },
    });
  }
  kakaoLogout() {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url: '/v1/user/unlink',
        success: (response) => {},
        fail: (error) => {
          console.log(error);
        },
      });
      Kakao.Auth.setAccessToken(undefined);
      const userinfoElem = document.querySelector('#userinfo');
      if (userinfoElem) {
        (userinfoElem as any).value = '';
      }
    }
  }
}
