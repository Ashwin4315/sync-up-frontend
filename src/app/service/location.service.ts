import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LocationService {
    constructor(private httpClient: HttpClient) { }

    getLocation(location) {
        console.log(`https://us1.locationiq.com/v1/search?key=pk.50c2546b9d53c796d5b17adbe35ea11b&q=${location}&format=json&`)

        return this.httpClient.get(`https://us1.locationiq.com/v1/search?key=pk.50c2546b9d53c796d5b17adbe35ea11b&q=${location}&format=json&`)
    }

}