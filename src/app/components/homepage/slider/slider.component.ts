import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CarouselModule],
  templateUrl: './slider.component.html',
})
export class HomeSliderComponent {
  products = [
    {
      title: 'LASWARCO ESTABLISHMENT ACT',
      content:
        'In 2004, the Lagos State Water Regulatory Commission was set up pursuant to S.48 of the Lagos Stage Water Sector Law (LSWSL) 2004 to protect the long term interests of consumers with regard to the quality, price and reliability of services received from service providers whether government owned or private and also to approve, review standards of performance of services and ensure the functions of water abstraction, supply and sewage services are properly carried out.',
      img: 'home-bg.png',
    },
    {
      title: 'Ocean Bliss',
      content:
        "The rhythmic crashing of waves against the shore creates a mesmerizing symphony of nature's power and tranquility, as the salty mist kisses your skin and the vast expanse of the ocean stretches out before your eyes, inviting you to embrace its timeless beauty. The rhythmic crashing of waves against the shore creates a mesmerizing symphony of nature's power and tranquility, as the salty mist kisses your skin and the vast expanse of the ocean stretches out before your eyes.",
      img: 'water/water_1.jpg',
    },
    {
      title: 'Refreshing Rainfall',
      content:
        'As the sky darkens and thunder rumbles in the distance, a gentle drizzle turns into a rejuvenating downpour, cleansing the earth and rejuvenating your senses with each raindrop that gracefully dances upon your face, bringing life to the world around you. As the sky darkens and thunder rumbles in the distance, a gentle drizzle turns into a rejuvenating downpour, cleansing the earth and rejuvenating your senses with each raindrop that gracefully dances upon your face.',
      img: 'water/water_2.jpg',
    },
    {
      title: 'Majestic Waterfalls',
      content:
        "Standing in awe at the precipice, you witness nature's grandeur as the water cascades down with unbridled force, forming a majestic waterfall. The sheer power and ethereal beauty of the tumbling water fill your heart with wonder and remind you of the raw strength of the natural world. Standing in awe at the precipice, you witness nature's grandeur as the water cascades down with unbridled force, forming a majestic waterfall. The sheer power and ethereal beauty of the tumbling water.",
      img: 'water/water_3.jpg',
    },
    {
      title: 'Tranquil Lakes',
      content:
        'The stillness of a serene lake mirrors the sky above, creating a tranquil sanctuary where time seems to stand still. The gentle ripples on the surface and the reflection of surrounding trees evoke a sense of peace, inviting you to bask in the serenity of the moment. The stillness of a serene lake mirrors the sky above, creating a tranquil sanctuary where time seems to stand still. The gentle ripples on the surface and the reflection of surrounding trees evoke a sense.',
      img: 'water/water_4.jpg',
    },
    {
      title: 'Enchanting Underwater World',
      content:
        'Diving into the depths of the ocean, you enter an enchanting world teeming with vibrant coral reefs, exotic marine life, and a kaleidoscope of colors. Surrounded by the gentle currents and the ethereal beauty of underwater ecosystems, you are transported to a realm of awe-inspiring wonder. Diving into the depths of the ocean, you enter an enchanting world teeming with vibrant coral reefs, exotic marine life, and a kaleidoscope of colors. Surrounded by the gentle currents.',
      img: 'water/water_5.jpg',
    },
    {
      title: 'Misty Waterfront Mornings',
      content:
        'Following the meandering path of the river, you uncover its secrets as the gentle flow carries you through hidden landscapes. The soothing sound of the water whispers tales of ancient times, while the lush vegetation and wildlife along its banks offer a glimpse into a world untouched by time. Following the meandering path of the river, you uncover its secrets as the gentle flow carries you through hidden landscapes. The soothing sound of the water whispers tales of ancient times.',
      img: 'water/water_6.jpg',
    },
    {
      title: 'Serenade by the Sea',
      content:
        'As the sun dips below the horizon, painting the sky in hues of orange and pink, the symphony of crashing waves serenades your soul. The salty breeze carries the melody, while the sand beneath your feet and the vastness of the ocean create an immersive experience of peace and harmony. As the sun dips below the horizon, painting the sky in hues of orange and pink, the symphony of crashing waves serenades your soul. The salty breeze carries the melody, while the sand beneath.',
      img: 'water/water_7.jpg',
    },
    {
      title: 'Whispering River Secrets',
      content:
        'Following the meandering path of the river, you uncover its secrets as the gentle flow carries you through hidden landscapes. The soothing sound of the water whispers tales of ancient times, while the lush vegetation and wildlife along its banks offer a glimpse into a world untouched by time. Following the meandering path of the river, you uncover its secrets as the gentle flow carries you through hidden landscapes. The soothing sound of the water whispers tales of ancient times.',
      img: 'water/water_8.jpg',
    },
  ];
}
