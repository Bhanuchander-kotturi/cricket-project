import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { credentials } from '../models/keys';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addKeys(cred: credentials): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.url + '/credentials', cred, httpOptions)
  }

  getKeysInfo(loginId: any, password: any): Observable<any> {
    return this.http.get(this.url + '/credentials', { params: { loginId: loginId, password: password }, responseType: 'json' })
  }




}
