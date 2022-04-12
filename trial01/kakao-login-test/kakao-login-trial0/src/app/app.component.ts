import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {
    console.log('start appcomponent');
    let client = this.http.post(
      '//localhost:8090/spring-jwt-test01/login',
      {
        nickname: 'test1',
        password: 'pw1',
      },
      { params: { nickname: 'test1', password: 'pw1' } }
    );
    console.log(client);
    let result = client.pipe(
      take(1),
      map((res) => {
        console.log('res :', res);
        return res;
      })
    );
    console.log(result.subscribe());
  }
}
