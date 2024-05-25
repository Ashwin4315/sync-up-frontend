import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilterService {
    constructor() { }

 
    filter = new BehaviorSubject<{
        lat: number,
        lng: number,
        time: string,
        domain: string,
        type: string,
    }>({
        lat: 0,
        lng: 0,
        time: new Date().toDateString(),
        domain: "",
        type: "",
      });

    sendData(filter) {
        this.filter.next(filter)
    }

}