import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Hammer from 'hammerjs';

@Component({
  selector: 'app-image-desgin',
  standalone: true,
  imports: [],
  templateUrl: './image-desgin.component.html',
  styleUrls: ['./image-desgin.component.css']
})
export class ImageDesginComponent implements OnInit, AfterViewInit {
  @ViewChild('board', { static: false }) board!: ElementRef;

  images: string[] = [
    '/output-onlinepngtools (10).png',
    '/output-onlinepngtools (11).png',
    '/output-onlinepngtools (15).png',
    '/output-onlinepngtools (16).png',
    '/output-onlinepngtools (17).png',
    '/output-onlinepngtools__11vvvvvvvvvvvvvvvvvvvvvvvvvvvv_-removebg-preview.png',
    '/output-onlinepngtools (12).png',
    '/output-onlinepngtools (18).png',
    '/output-onlinepngtools (20).png'


  ];

  currentIndex = 0;
  topCard!: HTMLElement;
  hammer!: HammerManager;
  isPanning = false;
  startPosX = 0;
  startPosY = 0;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.showCard();
    this.setupHammer();
    this.autoSwipe();
  }

  setupHammer() {
    if (!this.topCard) return;

    if (this.hammer) this.hammer.destroy();
    this.hammer = new Hammer(this.topCard);
    this.hammer.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }));

    this.hammer.on('pan', (e) => this.onPan(e));
  }

  onPan(e: any) {
    if (!this.isPanning) {
      this.isPanning = true;
      this.topCard.style.transition = '';

      const style = window.getComputedStyle(this.topCard);
      const matrix = new WebKitCSSMatrix(style.transform);


      let posX = e.deltaX + this.startPosX;
      let posY = e.deltaY + this.startPosY;

      const propX = e.deltaX / this.board.nativeElement.clientWidth;
      const dirX = e.deltaX < 0 ? -1 : 1;
      const deg = dirX * Math.abs(propX) * 45;

      this.topCard.style.transform = `translateX(${posX}px) translateY(${posY}px) rotate(${deg}deg)`;

      if (e.isFinal) {
        this.isPanning = false;
        this.topCard.style.transition = 'transform 200ms ease-out';

        if (Math.abs(propX) > 0.25) {
          posX = e.deltaX > 0 ? this.board.nativeElement.clientWidth : -this.board.nativeElement.clientWidth;
          this.topCard.style.transform = `translateX(${posX}px) translateY(${posY}px) rotate(${deg}deg)`;
          setTimeout(() => {
            this.board.nativeElement.removeChild(this.topCard);
            this.showCard();
            this.setupHammer();
          }, 200);
        } else {
          this.topCard.style.transform = `translateX(${this.startPosX}px) translateY(${this.startPosY}px) rotate(0deg)`;
        }
      }
    }
  }

  showCard() {
    this.topCard = document.createElement('div');
    this.topCard.style.maxHeight = '100%';

    this.topCard.style.backdropFilter = 'blur(10px)';
    this.topCard.style.textAlign = 'center';
    this.topCard.style.textAlign = 'center';




    const imageUrl = this.images[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.images.length;

    this.topCard.innerHTML = `<img src="${imageUrl}" />`;
    this.board.nativeElement.appendChild(this.topCard);
  }

  autoSwipe() {
    setInterval(() => {
      this.onPan({
        deltaX: -this.board.nativeElement.clientWidth,
        deltaY: 0,
        isFinal: true,
        direction: Hammer.DIRECTION_LEFT,
        center: { y: 0 },
      });
    }, 5000);
  }
}
