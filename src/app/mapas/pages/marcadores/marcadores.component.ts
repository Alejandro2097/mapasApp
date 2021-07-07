import { AfterViewInit, ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styles: [
    `
    .mapa-container{
      height: 100% ;
      width: 100%;
    }
    li{
      cursor: pointer;
    }
    .list-group{
      right: 20px;
      top: 20px;
      position: fixed;
      z-index:99;
    }
  `
  ]
})
export class MarcadoresComponent implements AfterViewInit {
  @ViewChild('mapa') divMapa!: ElementRef;

  mapa!: mapboxgl.Map;
  zoomLevel: number = 15;
  center: [number, number] = [ -74.08717257050742, 4.647273636061965];
  constructor() { }

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
      });
      //const markerHtml: HTMLElement = document.createElement('div');
      // markerHtml.innerHTML = 'Hola mundo';
      //  new mapboxgl.Marker()
      //  .setLngLat(this.center)
      //  .addTo(this.mapa);
  }
  irMarcador(){

  }
  agregarMarcador(){
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    console.log(color);

    const nuevoMarcador = new mapboxgl.Marker({
        draggable:true,
        color: color
     })
      .setLngLat( this.center)
      .addTo(this.mapa);
  }
}
