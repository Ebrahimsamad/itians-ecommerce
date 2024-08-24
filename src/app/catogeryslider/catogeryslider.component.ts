import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgFor } from '@angular/common';
interface Slide {
  image: string;
  title: string;
  items: string;
}
@Component({
  selector: 'app-catogeryslider',
  standalone: true,
  imports: [ CarouselModule, NgFor],

  templateUrl: './catogeryslider.component.html',
  styleUrl: './catogeryslider.component.css'
})
export class CatogerysliderComponent {
  slides: Slide[] = [
    { image: 'canon.jpg', title: 'Cameras', items: '5k' },
    { image: 'macbook-air.jpg', title: 'Laptops', items: '2.3k' },
    { image: 'iphone.jpg', title: 'Mobile', items: '9k' },
    { image: '71DMsp+X-pL._AC_UY327_QL65_.jpg', title: 'Speakers', items: '1.6k' },
    { image: '61+-pmJOYjL._AC_SX466_.jpg', title: 'Screens', items: '2k' },
    { image: 'acesory.png', title: 'Accessories', items: '1.2k' },
  ];

  currentIndex = 0;
  slideInterval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }


  startAutoSlide() {
    this.slideInterval = setInterval(() => {
      this.updateSlides();
    }, 3000);
  }

  stopAutoSlide() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  updateSlides() {
    const firstSlide = this.slides.shift();
    if (firstSlide) {
      this.slides.push(firstSlide);
    }
  }

  prevSlide() {
    // this.stopAutoSlide();
    // this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    // this.startAutoSlide();
    // }
    this.stopAutoSlide(); // Stop auto sliding
    const lastSlide = this.slides.pop();
    if (lastSlide) {
      this.slides.unshift(lastSlide);
    }
    setTimeout(() => this.startAutoSlide(),); 
  }

  nextSlide() {
    this.stopAutoSlide(); // Stop auto sliding
    this.updateSlides();
    setTimeout(() => this.startAutoSlide(), );
}
  // navigateToLink(link: string) {
  //   this.router.navigateByUrl(link);
  // }

}
