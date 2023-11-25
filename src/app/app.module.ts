import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TouchSliderComponent } from './touch-slider/touch-slider.component';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TouchSliderComponent, HammerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
