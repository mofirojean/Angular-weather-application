import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather-body',
  templateUrl: './weather-body.component.html',
  styleUrls: ['./weather-body.component.scss']
})
export class WeatherBodyComponent implements OnInit {
  cityName: string = "London";
  weatherData?: WeatherData; 

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ""
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = ""
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeather(cityName)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.weatherData = response;
        }
      }
    );
  }

}
