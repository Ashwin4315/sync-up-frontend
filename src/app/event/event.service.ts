import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../login/authService.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class EventService {

    constructor(private httpClient: HttpClient) { }



    createEvent(event) {
        return this.httpClient.post("http://localhost:3000/events", event, { withCredentials: true })
    }

    getEvents() {
        return this.httpClient.get("http://localhost:3000/events")
    }

    getEventsById(eventId) {
        return this.httpClient.get(`http://localhost:3000/events/id/${eventId}`)
    }

    getInfo() {
        return this.httpClient.get("http://localhost:3000/events/info", { withCredentials: true })
    }
    getEventsByParticipantId() {
        return this.httpClient.get("http://localhost:3000/events/registeredEvent", { withCredentials: true })
    }
    
    isUserParticipantInEvent(id) {
        return this.httpClient.get(`http://localhost:3000/events/registeredEvent/${id}`, { withCredentials: true })
    }

    getEventsByLocation(filter) {
        return this.httpClient.get(`http://localhost:3000/events/filter?lat=${filter.lat}&lng=${filter.lng}&time=${filter.time}&domain=${filter.domain}&type=${filter.type}`)
    }
    registerEvent(eventId) {
        return this.httpClient.get(`http://localhost:3000/events/register/${eventId}`, { withCredentials: true })
    }
}