import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input() draggable: boolean = true;
  @Input() latitude: number = 51.505;
  @Input() longitude: number = -0.09;
  @Input() zoom: number = 13;
  @Input() markerText: string = '';
  @Input() disableZoomControl: boolean = true;

  @Output() markerMoved: EventEmitter<{ lat: number, lng: number }> = new EventEmitter();

  map: L.Map;
  marker: L.Marker;

  constructor() { }

  ngAfterViewInit(): void {

    this.map = L.map('map', {
      dragging: this.draggable,
      zoomControl: this.disableZoomControl,
      scrollWheelZoom: this.disableZoomControl,
    }).setView([this.latitude, this.longitude], this.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);


    this.marker = L.marker([this.latitude, this.longitude], {
      draggable: this.draggable
    }).addTo(this.map);

    this.marker.bindPopup(this.markerText);

    this.marker.on('dragend', (event) => {
      const newPosition = event.target.getLatLng();
      this.markerMoved.emit({ lat: newPosition.lat, lng: newPosition.lng });
    });
  }
}

