import { Component, OnInit } from '@angular/core';
declare let Kakao: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor() {}
  ngOnInit(): void {
    Kakao.init('f513d5ff87bae79fd73c9abd045cb000');
    console.log(Kakao.isInitialized());
    // const kakaoAuth = Kakao.Auth.authorize({
    //   redirectUri:
    //     'http://localhost:8090/spring-jwt-test01/kakao-redirect-test',
    // });

    // console.log(kakaoAuth);
    // console.log('authorize fin');
    // console.log(Kakao.Auth.getAccessToken());
  }
  kakaoLogin() {
    //로그인하고
    Kakao.Auth.login({
      success: (response) => {
        console.log(response);
        //사용자 정보 가져오기
        Kakao.API.request({
          url: '/v2/user/me', //계정 정보를 가져오는 request url
          success: (res) => {
            console.log(res);
            const user = res.kakao_account; //카카오 계정 정보
            //console.log(user)
            user.host = 'kakao'; //다른 로그인 서비스와 구분하기 위해서 개인적으로 추가했음
            // 해당 페이지에서 객체를 만들고 곧바로 user 정보를 사용할 수 도 있고,
            // input 엘리먼트에 json으로 저장해뒀다가 나중에 사용할 수도 있음. 여기서는 input에 저장
            const userinfo = document.querySelector('#userinfo');
            if (userinfo) {
              (userinfo as any).value = JSON.stringify(user);
            } //user를 json문자열로 변환해서 저장해두기
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
      //토큰이 있으면
      Kakao.API.request({
        //로그아웃하고
        url: '/v1/user/unlink',
        success: (response) => {
          //console.log(response)
        },
        fail: (error) => {
          console.log(error);
        },
      });
      //토큰도 삭제
      Kakao.Auth.setAccessToken(undefined);
      //유저정보도 삭제
      const userinfoElem = document.querySelector('#userinfo');
      if (userinfoElem) {
        (userinfoElem as any).value = '';
      }
    }
  }
}
