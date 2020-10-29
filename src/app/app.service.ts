import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getWeather(){
    return this.httpClient.get('https://api.hgbrasil.com/weather?key=6a54a76a&city_name=Concei%C3%A7%C3%A3o_dos_Ouros');
  }

}
