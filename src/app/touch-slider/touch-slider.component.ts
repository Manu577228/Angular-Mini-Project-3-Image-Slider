import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Slide {
  imgSrc: string;
  imgAlt: string;
}

@Component({
  selector: 'app-touch-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.scss'],
})
export class TouchSliderComponent {
  @Input() images: Slide[] = [];
  selectedIndex = 0;
  showPrev(i: number) {
    if (this.selectedIndex > 0) {
      this.selectedIndex = i - 1;
    }
  }

  showNext(i: number) {
    if (this.selectedIndex < this.images?.length - 1) {
      this.selectedIndex = i + 1;
    }
  }
}
