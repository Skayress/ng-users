import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/interfaces';
import { Observable } from 'rxjs';


@Injectable({
   providedIn: 'root'
})
export class UserService {
   private apiUrl = 'https://reqres.in/api/users?page=2';

   constructor(private http: HttpClient) { }

   getUsers(): Observable<Users[]> {
      return this.http.get<Users[]>(this.apiUrl);
   }
}
