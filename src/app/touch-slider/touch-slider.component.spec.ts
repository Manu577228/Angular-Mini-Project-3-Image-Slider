import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchSliderComponent } from './touch-slider.component';

describe('TouchSliderComponent', () => {
  let component: TouchSliderComponent;
  let fixture: ComponentFixture<TouchSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TouchSliderComponent]
    });
    fixture = TestBed.createComponent(TouchSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
