import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { teams } from '../models/team';
import { players } from '../models/adminPlayer';
import { series } from '../models/series';
import { schedules } from '../models/schedule';
import { updatePoints } from '../models/point';
// import { player, onedaySeries, team, schedule } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  // Team component
  addTeam(team : teams) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(this.url + '/teams', team ,httpOptions)
  }


  //player component
  addPlayer(player : players) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(this.url + '/players',player,httpOptions)
  }  

  //series component
  addSeries(series : series) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(this.url + '/series',series,httpOptions)
  }

  viewSeries() : Observable<any>{
    return this.http.get(this.url +'/series', {responseType : 'json'})
  }

  updateSeries(series : series ) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    console.log(series);
    return this.http.put(this.url +'/series/' + series.id,series,httpOptions)
    
  }

  //schedule component
  addSchedule(schedule : schedules) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(this.url + '/schedules',schedule,httpOptions)
  }

  //update match details
  addMatches(points : updatePoints) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(this.url +'/updatePoints',points,httpOptions)
  }

  viewDetails() : Observable<any>{
    return this.http.get(this.url + '/updatePoints', {responseType : 'json'})
  }

}
