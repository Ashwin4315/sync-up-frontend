import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';


export interface User {
    email: string
    id: string,
    profilePhoto: string,
    description: string,
    username: string,
    joinedAt:string
}

@Injectable({ providedIn: 'root' })
export class AuthService {

    user = new BehaviorSubject<User>(null);

    constructor(private httpClient: HttpClient, private router: Router) { }

    signup(user: { username: string, email: string, password: string }) {
        return this.httpClient.post<User>("http://localhost:3000/auth/signup", user, { withCredentials: true }).pipe(tap((userData) => {
            this.user.next(userData)
        }))
    }

    signin(user: { email: string, password: string }) {
        return this.httpClient.post<User>("http://localhost:3000/auth/signin", user, { withCredentials: true }).pipe(tap((userData) => {
            this.user.next(userData)
        }))
    }

    whoAmI() {
        return this.httpClient.get("http://localhost:3000/auth/whoAmI", { withCredentials: true })
    }

    updateMe(udatedData) {
        return this.httpClient.patch<User>("http://localhost:3000/auth/updateMe", udatedData, { withCredentials: true }).pipe(tap((userData) => {
            this.user.next(userData)
        }))
    }

    signout() {
        this.httpClient.get("http://localhost:3000/auth/signout", { withCredentials: true }).pipe(tap(() => {
            this.user.next(null)
            console.log("dssdsdsds")

        })).subscribe(() => {
            this.router.navigate(["/"])
            console.log("sdkfjdkfjdfjdfjdifjdij")

        })
    }

}