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

  constructor(private service: AppService) {}

  ngOnInit(){    
    this.service.getWeather('Conceição_dos_Ouros,MG').subscribe( (weather: any) => this.weather = weather );
  }

  onSubmit(f: NgForm) {
    this.service.getWeather(f.value.city).subscribe( (weather: any) => this.weather = weather );
  }

}
