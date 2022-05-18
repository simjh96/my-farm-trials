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
export class SeedPage {}
