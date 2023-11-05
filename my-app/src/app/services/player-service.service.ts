import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { details } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  url: string = 'http://localhost:3000';

  constructor(private http :HttpClient) { }

  addDetails(detail : details) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(this.url + '/details',detail,httpOptions)
  }

  viewPlayers(): Observable<any> {
    return this.http.get(this.url + '/details', {responseType : 'json'})
  }

  deletePlayers(name : any): Observable<any>{
    return this.http.delete(this.url + '/details/' +name, {responseType : 'json'})
  }

  getPlayerByName(name : any) :Observable<any>{
    return this.http.get(this.url + '/details/' + name, {responseType : 'json'})
  }

  updatePlayers(detail : details) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    console.log(detail);
    return this.http.put(this.url + '/details/' + detail.name,detail,httpOptions)
  }
}
