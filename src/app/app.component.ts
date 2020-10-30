import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  weather: any;

  constructor(private service: AppService) {}

  ngOnInit():void{
    this.service.getWeather().subscribe( (weather: any) => this.weather = weather );
  }

}
