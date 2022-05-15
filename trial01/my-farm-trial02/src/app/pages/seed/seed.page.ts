/* eslint-disable no-underscore-dangle */
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  RendererFactory2,
  ViewChild,
} from '@angular/core';
import { Platform } from '@ionic/angular';
import gsap from 'gsap';

@Component({
  selector: 'app-seed',
  templateUrl: './seed.page.html',
  styleUrls: ['./seed.page.scss'],
})
export class SeedPage implements AfterViewInit, OnInit {
  public balls = [];
  public _balls = [];
  public newBall;
  public _newBall;
  public featureBackground;
  public content;
  public i: number;
  public vw;
  public vh;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private platform: Platform
  ) {
    this.vw = this.platform.width();
    this.vh = this.platform.height();
  }
  ngOnInit(): void {
    this.featureBackground = this.renderer.createElement('ion-grid');
    this.content = this.el.nativeElement.children[1];
    this.renderer.setProperty(
      this.featureBackground,
      'id',
      'featureBackground'
    );
    this.renderer.appendChild(this.content, this.featureBackground);

    for (this.i = 0; this.i < 20; this.i++) {
      // meta data of balls
      const r = this.vw * 0.15 * this.random(0.7, 1);
      this._newBall = { x: r, y: 0, r };
      this._balls.push(this._newBall);

      // render balls
      this.newBall = this.renderer.createElement('ion-grid');
      this.renderer.addClass(this.newBall, 'ball');
      this.renderer.setStyle(this.newBall, 'width', `${2 * r}px`);
      this.renderer.setStyle(this.newBall, 'height', `${2 * r}px`);
      this.renderer.appendChild(
        this.newBall,
        this.renderer.createText(`${this.i}`)
      );
      this.renderer.appendChild(this.featureBackground, this.newBall);
      this.balls.push(this.newBall);
    }

    this.calcInitPos();
  }

  ngAfterViewInit(): void {
    this.balls.forEach((e, i) => {
      gsap.set(e, {
        backgroundColor:
          'random([#663399,#84d100,#cc9900,#0066cc,#993333,#d8637c])',
        x: this._balls[i]['x'],
        y: '-50vw',
        xPercent: -50,
        yPercent: -50,
      });
    });
    this.balls.forEach((e, i) => {
      gsap.to(e, {
        xPercent: -50,
        yPercent: -50,
        delay: 0.5 + 0.05 * i,
        y: this._balls[i]['y'],
      });
    });
  }

  random(min, max) {
    return Math.random() * (max - min + 1) + min;
  }

  calcInitPos() {
    console.log(`==================calcInitPos works==================`);
    for (let i = 0; i < this._balls.length; i++) {
      const element = this._balls[i];
      this.setPos(i);
    }
  }

  setPos(upto: number) {
    // set pos upto i
    if (upto === 0) {
      this._balls[0]['y'] = this.vh * 0.7 - this._balls[0]['r'];
    } else {
      // find inittouch idx
      let initTouch: number = this.getInitTouch(upto);
      // roll
      // pile up
      let d = this.getD(initTouch, upto);
      this._balls[upto]['y'] =
        this._balls[initTouch]['y'] -
        Math.sqrt(
          d ** 2 - (this._balls[initTouch]['x'] - this._balls[upto]['x']) ** 2
        );
      console.log(`piled to :`, this._balls[upto]['y']);

      if (this._balls[upto]['x'] < this._balls[initTouch]['x']) {
        // not rollable
        console.log(`not rollable`);
      } else {
        console.log(`rollable`);
        let theta = this.getTheta(upto, initTouch);
        console.log(`current theta`, theta);
        // roll
        let banList = [initTouch];
        let roll = this.rollTilTouch(upto, initTouch, theta, banList);
        console.log(`banlist`, banList);
        let safeCount = 0;
        while (roll['ctn'] === true && safeCount < 10) {
          roll = this.rollTilTouch(
            upto,
            roll['tIdx'],
            this.getTheta(upto, roll['tIdx']),
            banList
          );
          safeCount += 1;
        }
        console.log(
          `ball ${upto} has finnished at ${this._balls[upto]['x']}, ${this._balls[upto]['y']}`
        );
      }
    }
  }

  getInitTouch(upto) {
    let candidates = [];
    for (let i = 0; i < upto; i++) {
      let y =
        -Math.sqrt(
          (this._balls[upto]['r'] + this._balls[i]['r']) ** 2 -
            (this._balls[upto]['r'] - this._balls[i]['x']) ** 2
        ) + this._balls[i]['y'];
      candidates.push({ i, y: isNaN(y) ? this.vh : y });
    }
    candidates.forEach((v, i) => {
      console.log(`point ${upto} <-${candidates[i]['y']}-> ${i}`);
    });
    return candidates.reduce(
      (past: { i: number; y: number }, curr: { i: number; y: number }) =>
        curr['y'] <= past['y'] ? curr : past,
      { i: -1, y: this.vh }
    )['i'];
  }
  rollTilTouch(
    upto,
    initTouch,
    theta,
    banList: Array<number>
  ): { tIdx: number; ctn: boolean; theta: number } {
    let d = this.getD(upto, initTouch);
    let touched = false;
    let safeCount = 0;

    while (
      this._balls[upto]['x'] + this._balls[upto]['r'] < this.vw * 1.5 &&
      this._balls[upto]['y'] + this._balls[upto]['r'] < this.vh * 0.7 &&
      !touched &&
      safeCount < 100
    ) {
      theta -= 0.1;
      this._balls[upto]['x'] =
        this._balls[initTouch]['x'] + d * Math.cos(theta);
      this._balls[upto]['y'] =
        this._balls[initTouch]['y'] - d * Math.sin(theta);
      console.log(
        `==== tilted ====`,
        this._balls[upto]['x'],
        this._balls[upto]['y']
      );
      console.log(`current theta : `, theta);
      for (let i = 0; i < upto; i++) {
        if (
          !banList.includes(i) &&
          Math.hypot(
            this._balls[upto]['x'] - this._balls[i]['x'],
            this._balls[upto]['y'] - this._balls[i]['y']
          ) <=
            this._balls[upto]['r'] + this._balls[i]['r']
        ) {
          console.log(`${upto} detacted collision with ${i} `);
          touched = true;
          banList.push(i);
          return {
            tIdx: i,
            ctn: this._balls[upto]['x'] >= this._balls[i]['x'],
            theta,
          };
        }
      }
      safeCount += 1;
    }
    console.log(`ended with touching wall`);
    return { tIdx: 0, ctn: false, theta };
  }
  getTheta(i, j) {
    // get theta
    return Math.atan(
      -(this._balls[i]['y'] - this._balls[j]['y']) /
        (this._balls[i]['x'] - this._balls[j]['x'])
    );
  }
  getD(i, j) {
    return this._balls[i]['r'] + this._balls[j]['r'];
  }
}
