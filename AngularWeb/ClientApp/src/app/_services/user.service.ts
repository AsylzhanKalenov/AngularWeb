import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {

    private AuthUrl = "https://localhost:44340/api/auth";
    constructor(private http: HttpClient) { }

    getAll() {
      return this.http.get<User[]>(`${this.AuthUrl}`);
    }

    getById(id: number) {
      return this.http.get<User>(`${this.AuthUrl}/${id}`);
    }
}
