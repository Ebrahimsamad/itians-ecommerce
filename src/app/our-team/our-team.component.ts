import { NgFor } from '@angular/common';
import { Component,AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import 'owl.carousel';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [NgFor],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent implements AfterViewInit {
  profiles = [
    { name: 'John Rooster', title: 'Co-Founder, President', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi at consequat unde.', image: 'sdddd.jpg' },
    { name: 'John Rooster', title: 'Co-Founder, President', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi at consequat unde.', image: 'WhatsApp Image 2024-08-08 at 17.04.57.jpeg' },
    { name: 'John Rooster', title: 'Co-Founder, President', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi at consequat unde.', image: 'WhatsApp Image 2024-08-08 at 17.11.36.jpeg' },
    { name: 'John Rooster', title: 'Co-Founder, President', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi at consequat unde.', image: 'WhatsApp Image 2024-08-08 at 18.02.45.jpeg' },
    { name: 'John Rooster', title: 'Co-Founder, President', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi at consequat unde.', image: 'WhatsApp Image 2024-08-08 at 19.14.34.jpeg' }
  ];

  ngAfterViewInit(): void {
    // Initialize Owl Carousel using window.$
    (window as any).$('.owl-carousel').owlCarousel({
      items: 3, // Number of items to show
          loop: true, // Loop items
          margin: 10, // Margin between items
          nav: false, // Show navigation arrows
          dots: true, // Show dots navigation
          autoplay: true, // Auto play
          autoplayTimeout: 3000, // Time between slides (in milliseconds)
          autoplayHoverPause: true, // Pause on hover
          responsive: {
            0: {
              items: 1
            },
            576: {
              items: 1
            },
            768: {
              items: 3 
            }
          }
    });
  }

}
