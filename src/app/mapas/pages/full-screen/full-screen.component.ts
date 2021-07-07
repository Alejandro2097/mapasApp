import { Component, OnInit } from '@angular/core';
import * as  mapboxgl from 'mapbox-gl'
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [`
    #mapa{
      height: 100% ;
      width: 100%;
    }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   

   
    var map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ -74.08717257050742, 4.647273636061965],
    zoom: 17
    });
  }

}
