import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class MapsService {
    latitude = 55.11;
    longitude = 77.2;

    getCurrentLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
        }, (error) => {
            console.log("Error Occurred",error)
            this.latitude = 55.11;
            this.longitude = 77.2;
        })
    }
}