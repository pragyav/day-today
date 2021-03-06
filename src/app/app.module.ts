import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';
import { CONST_ROUTING } from './app.routing';
import { SharedService } from "./shared.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrencyComponent,
    WeatherComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
