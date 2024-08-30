/* Main Section */
.section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background-color: #2d5356;
    color: #ffffff;
    gap: 30px;
    
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.slider-container {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: auto;
  }
  
  .slider {
    display: flex;
    overflow: hidden;
    width: 100%;
  }
  
  .slide {
    min-width: 33.33%;
    transition: transform 0.5s ease;
    position: relative;
  }
  
  img {
    width: 100%;
    border-radius: 15px;
  }
  
  .overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
  
  .nav-button {
    background-color: #ffcc00;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    margin: 0 10px;
    font-size: 20px;
    color: white;
  }
  
  .left {
    position: absolute;
    left: -50px;
  }
  
  .right {
    position: absolute;
    right: -50px;
  }
  ///////////
<div class="section">
    <div class="text-section">
        <h1>Modern Interior Design Studio</h1>
        <p>Choosing the right furniture for your home online will add elegance and functionality to your interior while
            also being cost-effective and long-lasting.</p>
        <button class="shop-now">Shop Now</button>
        <div class="stats">
            <span>2500+ Unique Styles</span>
            <span>5000+ Happy Customers</span>
            <span>300+ Certified Outlets</span>
        </div>
    </div>

    <div class="slider-container">
        <button class="nav-button left" (click)="previousSlide()">←</button>

        <div class="slider">
            <div class="slide" *ngFor="let image of images; let i = index"
                [ngStyle]="{ transform: 'translateX(-' + currentIndex * 100 + '%)' }">
                <div class="image-container">
                    <img [src]="image.url" [alt]="image.alt" />
                    <div class="overlay">
                        <p>{{ image.title }}</p>
                        <p *ngIf="image.items">{{ image.items }}+ items</p>
                    </div>
                </div>
            </div>
        </div>

        <button class="nav-button right" (click)="nextSlide()">→</button>
    </div>
import { NgFor,NgIf, NgStyle } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-designimage',
  standalone: true,
  imports: [NgFor,FormsModule,NgIf,NgStyle],
  templateUrl: './designimage.component.html',
  styleUrl: './designimage.component.css'
})
export class DesignimageComponent {
  images = [
    { url: 'watch-removebg-preview.png', title: 'Bed Room', items: 1200, alt: 'Bedroom' },
    { url: 'watch-removebg-preview.png', title: 'Living Room', alt: 'Living Room' },
    { url: 'watch-removebg-preview.png', title: 'Waiting Room', alt: 'Waiting Room' }
    // Add more images as needed
  ];

 
  currentIndex = 0;

  previousSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

  // updateTransform() {
  //   const slider = document.querySelector('.slider');
  //   slider!.setAttribute('style', `transform: translateX(-${this.currentIndex * 100}%);`);
  // }
}
</div>
/* Main Section */
.section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    background-color: #2d5356;
    color: #ffffff;
    gap: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Text Section */
.text-section {
    width: 45%;
}

.text-section h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    line-height: 1.2;
    color: white;
}

.text-section p {
    margin: 20px 0;
    font-size: 1.2rem;
    line-height: 1.6;
    color: #e0e0e0;
}

/* Shop Button */
.shop-now {
    background-color: #e6a23c;
    padding: 15px 30px;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 50px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.shop-now:hover {
    background-color: #d09423;
    transform: translateY(-3px);
}

/* Stats Section */
.stats {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    font-weight: bold;
    font-size: 1rem;
    color: #e0e0e0;
}

/* Carousel Section */
.carousel {
    position: relative;
    width: 50%;
    height: 500px; 
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}



.carousel-images img {
    width: auto;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
   
}
/* Media Queries for Responsiveness */
@media (max-width: 768px) {
    .section {
        flex-direction: column;
        padding: 20px;
        gap: 20px;
    }

    .text-section {
        width: 100%;
        text-align: center;
    }

    .carousel {
        width: 100%;
        height: 400px;
    }

    .carousel-images img {
        width: auto;
        height: 100%;
    }

    .stats {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}
