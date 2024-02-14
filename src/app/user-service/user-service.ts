import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/interfaces';
import { Observable } from 'rxjs';


@Injectable({
   providedIn: 'root'
})
export class UserService {
   private apiUrl = 'https://reqres.in/api/users?page=2';

   constructor(private http: HttpClient) { }

   getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.apiUrl);
   }
}
