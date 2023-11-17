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

  //personal Details
  addDetails(detail : details) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(this.url + '/details',detail,httpOptions)
  }

  viewDetails() : Observable<any>{
    return this.http.get(this.url + '/details',{responseType : 'json'})
  }

  //Teams component
  viewTeams() : Observable<any>{
    return this.http.get(this.url + '/teams', {responseType : 'json'})
  }

  viewSchedule() : Observable<any>{
    return this.http.get(this.url + '/schedules', {responseType : 'json'})
  }
}
