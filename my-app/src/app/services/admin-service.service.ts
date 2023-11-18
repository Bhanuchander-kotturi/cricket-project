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

  //Get all teams
  getTeams() : Observable<any>{
    return this.http.get(this.url +'/teams', {responseType:'json'})
  }

  //get team by id
  getTeamById(id:any) : Observable<any>{
    return this.http.get(this.url +'/teams/'+id,{responseType:'json'})
  }

  //update team
  updateTeam(team: teams) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }
    console.log(team);
    return this.http.put(this.url + '/teams/' + team.id,team,httpOptions)
  }


  //player component
  addPlayer(player : players) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(this.url + '/players',player,httpOptions)
  }  

  viewPlayers() : Observable<any> {
    return this.http.get(this.url +'/players', {responseType:'json'})
  }

  deletePlayer(id:any) : Observable<any> {
    return this.http.delete(this.url + '/players/' +id, {responseType:'json'})
  }

  getPlayers() : Observable<any> {
    return this.http.get(this.url + '/players', {responseType:'json'})
  }

  getPlayersById(id : any) : Observable<any> {
    return this.http.get(this.url + '/players/'+id, {responseType:'json'})
  }

  updatePlayer(player : players) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    console.log(player);
    return this.http.put(this.url + '/players/'+ player.id,player,httpOptions)
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

  deleteSeries(id:any) : Observable<any>{
    return this.http.delete(this.url + '/series/' +id, { responseType:'json' })
  }

  getSeriesById(id : any) : Observable<any>{
    return this.http.get(this.url + '/series/' + id, { responseType : 'json' })
  }

  //get all series
  getSeries() : Observable<any>{
    return this.http.get(this.url + '/series', {responseType:'json'})
  }

  //update series
  updateSeries(series: series) : Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type' : 'application/json'})
    }
    console.log(series);
    return this.http.put(this.url + '/series/' + series.id,series,httpOptions)
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
