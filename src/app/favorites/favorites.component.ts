import { Component, AfterViewInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CardComponent,NgFor],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements AfterViewInit {
  products  = [
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock1",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock3",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
    {
      id: 2,
      title: "Z-bock",
      image: "https://ik.imagekit.io/7ksxy0uxk/e-commerce/jj.png?updatedAt=1724415623157",
      price: 9.99,
      discountPercentage: 7.17
    },
  ];

  ngAfterViewInit(): void {
    $('.slider').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      centerMode: false,
      initialSlide: 0,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1, 
          }
        }
      ]
    });

    $('.prev').click(() => {
      $('.slider').slick('slickPrev');
    });
    $('.next').click(() => {
      $('.slider').slick('slickNext');
    });
  }
}
