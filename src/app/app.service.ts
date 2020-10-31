import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getWeather(city: String){
    return this.httpClient.get(`https://api.hgbrasil.com/weather?key=6a54a76a&city_name=${city}`)
      .pipe(
        map(
          (resp: any) => resp.results
        )
      );
  }

}
