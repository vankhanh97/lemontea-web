import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = `${environment.apiUrl}/api/user`;

    constructor(private http: HttpClient) {}

    getProfile(): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/profile`);
    }

    updateProfile(profile: Partial<User>): Observable<User> {
        return this.http.put<User>(`${this.apiUrl}/profile`, profile);
    }

    deleteProfile(): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/profile`);
    }
} 