import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weather: any;
  position: any;

  constructor(private service: AppService) {}

  ngOnInit(){
    
    if(navigator.geolocation){
      this.service.getPosition().then( pos =>
        {
          this.service.getWeatherByGeoLocalization(pos.lat, pos.lng).subscribe((weather: any) => this.weather = weather);
        } 
      );
    }else{
      this.service.getWeatherByCity('Conceição_dos_Ouros,MG').subscribe( (weather: any) => this.weather = weather );
    }
  }

  onSubmit(f: NgForm) {
    this.service.getWeatherByCity(f.value.city).subscribe( (weather: any) => this.weather = weather );
  }

}
