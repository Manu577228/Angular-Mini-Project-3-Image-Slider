import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'image-slide';

  images = [
    {
      imgSrc: 'assets/image-1.jpg',
      imgAlt: 'Image 1',
    },
    {
      imgSrc: 'assets/image-2.jpg',
      imgAlt: 'Image 2',
    },
    {
      imgSrc: 'assets/image-3.jpg',
      imgAlt: 'Image 3',
    },
    {
      imgSrc: 'assets/image-4.jpg',
      imgAlt: 'Image 4',
    },
    {
      imgSrc: 'assets/image-5.jpg',
      imgAlt: 'Image 5',
    },
    {
      imgSrc: 'assets/image-6.jpg',
      imgAlt: 'Image 6',
    },
    {
      imgSrc: 'assets/image-7.jpg',
      imgAlt: 'Image 7',
    },
    {
      imgSrc: 'assets/image-8.jpg',
      imgAlt: 'Image 8',
    },
    {
      imgSrc: 'assets/image-9.jpg',
      imgAlt: 'Image 9',
    },
    {
      imgSrc: 'assets/image-10.jpg',
      imgAlt: 'Image 10',
    },
  ];
}
