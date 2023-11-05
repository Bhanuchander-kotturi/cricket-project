import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { player, onedaySeries, team, schedule } from '../models/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  url: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  //Adding Team
  addTeam(roles: team): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.url + '/team', roles, httpOptions)
  }

  //Adding Player
  addPlayer(roles: player): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.url + '/player', roles, httpOptions)
  }

  //Adding Series
  addSeries(roles: onedaySeries): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.url + '/series', roles, httpOptions)
  }


  //Adding Schedule
  addSchedule(roles: schedule): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.url + '/schedule', roles, httpOptions)
  }

  //Get details by Admin Id and Password
  getAdminInfo(adminId: any, password: any): Observable<any> {
    return this.http.get(this.url + '/admin', { params: { adminId: adminId, password: password }, responseType: 'json' },)
  }

  // View All Admins 
  viewAdmin(): Observable<any> {
    return this.http.get(this.url + '/users', { responseType: 'json' })
  }

  getAdmin() : Observable<any> {
    return this.http.get(this.url +'/admin', {responseType: 'json'})
  }


}
