import { Injectable } from '@angular/core';
// 1. Import HttpClient
import { HttpClient } from '@angular/common/http';

// 2. Import Observable 
import { Observable } from 'rxjs';


// 3. Import User
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    // 5. Inject HttpClient into the constructor
    private http:HttpClient
  ) { }

  //Return an Observable array or User objects
  test(): Observable<User[]>{
    let url = 'http://localhost:3000/api/users'
    //Make a get request over HTTP
    return this.http.get<User[]>(url);
  }
}