import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly apiKey: string = 'e18efc0f71be600d1acdeb616832a41a'

  constructor(private http: HttpClient) { }

  getWeather(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherBaseUrl, {
      params: new HttpParams()
        .set('q', cityName)
        .set('appid', this.apiKey)
    })
  }
}
