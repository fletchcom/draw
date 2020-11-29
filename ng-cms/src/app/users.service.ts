import { Injectable } from '@angular/core';
// 1. Import HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

// 2. Import the User object (model)
import { User } from './user';

// 3. Create a JSON header to be attached to outbound post requests
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // 4. Set the domain portion of the url
  private url:string = 'http://localhost:3000/api/auth';

  constructor(
    private http:HttpClient
  ) { }

 login(user: User): Observable<User> {
  return this.http.post<User>(`${this.url}/login`, user, httpOptions);
 }
  logout(): Observable<User> {
   return this.http.get<User>(`${this.url}/logout`, httpOptions);
}
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }
  createUser (user: User): Observable<User> {
    return this.http.post<User>(this.url, user, httpOptions);
  }
  editUser (user: User): Observable<User> {
    return this.http.put<User>(this.url, user, httpOptions);
  }
  deleteUser (id: string): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }

}