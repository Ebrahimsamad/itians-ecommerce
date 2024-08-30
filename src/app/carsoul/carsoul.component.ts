import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-carsouel',
  standalone: true,
  imports: [],
  templateUrl: './carsoul.component.html',
  styleUrls: ['./carsoul.component.css']
})
export class CarsouelComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const carouselElement = document.getElementById('myCarousel');
    if (carouselElement) {
      const carousel = new (window as any).bootstrap.Carousel(carouselElement, {
        interval: 4000,
        pause: 'hover',
      });
    }
  }
}
