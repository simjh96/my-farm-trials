import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

const helper = new JwtHelperService();
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
// https://www.youtube.com/watch?v=lNqXCn8KacI
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public kakaoAuth = new BehaviorSubject(null);
  public user: Observable<any>;
  public kakaopk: string;
  private userData = new BehaviorSubject(null);

  constructor(
    private storage: Storage,
    private http: HttpClient,
    private plt: Platform,
    private router: Router
  ) {
    console.log('auth.service constructor');
    this.storage.create();
    this.loadStoredAcessToken();
    console.log('stored token loaded');
  }

  loadStoredAcessToken() {
    let platformObs = from(this.plt.ready());

    this.user = platformObs.pipe(
      switchMap(() => from(this.storage.get(ACCESS_TOKEN))),
      map((token) => {
        console.log('Token from storage: ', token);
        if (token) {
          let decoded = helper.decodeToken(token);
          console.log('decoded: ', decoded);
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }

  login(credentials: { nickname: string; password: string }): Observable<any> {
    console.log('credentials: ', credentials);
    console.log('this.http: ');
    console.log(this.http);
    let client = this.http.post(
      '//localhost:8090/spring-jwt-test01/login',
      {
        nickname: credentials.nickname,
        password: credentials.password,
      },
      {
        params: {
          nickname: credentials.nickname,
          password: credentials.password,
        },
      }
    );
    console.log(client);
    return client.pipe(
      take(1),
      map((res) => {
        console.log('res :', res);
        return res;
      }),
      switchMap((token) => {
        let decoded0 = helper.decodeToken(token['access_token'] as any);
        let decoded1 = helper.decodeToken(token['refresh_token'] as any);
        console.log('decoded0: ', decoded0);
        this.userData.next(decoded0);
        let storageObs1 = this.storage.set(ACCESS_TOKEN, token['access_token']);
        let storageObs2 = this.storage.set(
          REFRESH_TOKEN,
          token['refresh_token']
        );
        return Promise.all([storageObs1, storageObs2]);
      })
    );
  }

  getUser() {
    return this.userData.getValue();
  }
  logout() {
    this.storage.remove(ACCESS_TOKEN).then(() => {
      this.router.navigateByUrl('/');
      this.userData.next(null);
    });
  }

  idCheck(nickname: string) {
    return this.http
      .post(
        '//localhost:8090/spring-jwt-test01/IdCheck.do',
        {
          nickname: nickname,
        },
        {
          params: {
            nickname: nickname,
          },
        }
      )
      .pipe(
        take(1),
        map((res) => {
          console.log('res :', res);
          return res['count'];
        })
      );
  }

  // join(nickname: string, password: string, access_token: string) {
  //   return this.http
  //     .post(
  //       '//localhost:8090/spring-jwt-test01/Join.do',
  //       { nickname: nickname, password: password, access_token: access_token },
  //       {
  //         params: {
  //           nickname: nickname,
  //           password: password,
  //           access_token: access_token,
  //         },
  //       }
  //     )
  //     .pipe(
  //       take(1),
  //       map((res) => {
  //         console.log('res :', res);
  //         this.kakaoAuth.next(null);
  //         return res['count'];
  //       })
  //     );
  // }

  joinStart(accessToken: string) {
    return this.http
      .post(
        '//localhost:8090/spring-jwt-test01/JoinStart.do',
        { accessToken: accessToken },
        {
          params: {
            accessToken: accessToken,
          },
        }
      )
      .pipe(
        take(1),
        map((res) => {
          console.log('res from join start:', res);
          return res['count'];
        })
      );
  }
  joinEnd(kakaopk: string, nickname: string, password: string) {
    return this.http
      .post(
        '//localhost:8090/spring-jwt-test01/JoinEnd.do',
        { kakaopk: kakaopk, nickname: nickname, password: password },
        {
          params: {
            kakaopk: kakaopk,
            nickname: nickname,
            password: password,
          },
        }
      )
      .pipe(
        take(1),
        map((res) => {
          console.log('res :', res);
          this.kakaoAuth.next(null);
          return res['count'];
        })
      );
  }
}
