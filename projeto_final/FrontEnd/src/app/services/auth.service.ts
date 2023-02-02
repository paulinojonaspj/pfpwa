import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  private server: string = "https://backpfpwa.onrender.com/";
  registarUser(formData: any): Observable<any> {

    return this.http.post<FormData>(this.server +"user", formData);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.server + "user/" + id);
  }

  login(email: string, pw: string): Observable<User> {
    return this.http.get<User>(this.server + "user/" + email + "/" + pw);
  }

  vEmail(email: string): Observable<User> {
    return this.http.get<User>(this.server + "vemail/" + email);
  }

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.server + "user");
  }
}
