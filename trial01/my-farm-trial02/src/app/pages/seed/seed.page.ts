import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  RendererFactory2,
  ViewChild
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
  public newBall;
  public featureBackground;
  public content;
  public i: number;

  constructor(private renderer: Renderer2,
    private el: ElementRef,
    private platform: Platform) {
    }
  ngOnInit(): void {
    this.featureBackground = this.renderer.createElement('ion-grid');
    this.content = this.el.nativeElement.children[1];
    this.renderer.setProperty(this.featureBackground, 'id', 'featureBackground');
    this.renderer.appendChild(this.content, this.featureBackground);

    for (this.i = 0; this.i < 80; this.i++) {
      this.newBall = this.renderer.createElement('ion-grid');
      this.renderer.addClass(this.newBall, 'ball');
      this.renderer.appendChild(this.featureBackground, this.newBall);
      this.balls.push(this.newBall);
    }
  }

  ngAfterViewInit(): void {
    console.log(this.random(-0.1, 1.1));
    gsap.set(this.balls, {
      backgroundColor: 'random([#663399,#84d100,#cc9900,#0066cc,#993333,#d8637c])',
      scale: 'random(0.4, 1)',
      x: `random(-100, ${this.platform.width()})`,
      y: '-100vh'
    });

    gsap.to(this.balls.slice(60,80), {
      duration: 0.5,
      delay: "random(0.5, 1.2)",
      y: '51vh',
    });
    gsap.to(this.balls.slice(40,60), {
      duration: 0.5,
      delay: "random(0.8, 1.3)",
      y: '34vh',
    });
    gsap.to(this.balls.slice(20,40), {
      duration: 0.5,
      delay: "random(0.9, 1.4)",
      y: '17vh',
    });
    gsap.to(this.balls.slice(0,20), {
      duration: 0.5,
      delay: "random(1.3, 1.5)",
      y: '0vh',
    });
  }

  random(min, max) {
    return Math.random() * (max - min + 1) + min;
  }
}
