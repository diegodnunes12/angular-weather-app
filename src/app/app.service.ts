import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getWeatherByCity(city: String){
    return this.httpClient.get(`https://api.hgbrasil.com/weather?key=a3059346&city_name=${city}`)
      .pipe(
        map(
          (resp: any) => resp.results
        )
      );
  }

  getWeatherByGeoLocalization(lat: String, lon: String){
    return this.httpClient.get(`https://api.hgbrasil.com/weather?key=a3059346&lat=${lat}&lon=${lon}&user_ip=remote`)
      .pipe(
        map(
          (resp: any) => resp.results
        )
      );
  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

}
