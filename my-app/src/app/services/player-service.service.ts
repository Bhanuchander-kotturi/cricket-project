import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { details } from '../models/player';
import { schedules } from '../models/schedule';


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

  //get all details
  getDetails() : Observable<any> {
    return this.http.get(this.url + '/details', {responseType:'json'})
  }

  getDetailsById(id : any) : Observable<any> {
    return this.http.get(this.url +'/details/'+id, {responseType:'json'})
  }

  updateDetails(detail : details) : Observable<any> {
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    console.log(detail);
    return this.http.put(this.url + '/details/'+ detail.id,detail,httpOptions)
  }

  //Teams component
  viewTeams() : Observable<any>{
    return this.http.get(this.url + '/teams', {responseType : 'json'})
  }

  deleteTeams(id:any) : Observable<any>{
    return this.http.delete(this.url + '/teams/' +id, {responseType:'json'})
  }

  //schedule component
  viewSchedule() : Observable<any>{
    return this.http.get(this.url + '/schedules', {responseType : 'json'})
  }

  deleteSchedule(id:any) : Observable<any>{
    return this.http.delete(this.url + '/schedules/' +id, {responseType:'json'})
  }
  
  //get all schedules
  getSchedule() : Observable<any>{
    return this.http.get(this.url + '/schedules', {responseType:'json'})
  }

  //get schedule by id
  getScheduleById(id : any) : Observable<any>{
    return this.http.get(this.url + '/schedules/'+id, {responseType:'json'})
  }

  //update schedule
  updateSchedule(schedule : schedules) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    console.log(schedule);
    return this.http.put(this.url + '/schedules/' +schedule.id,schedule,httpOptions);
  }

  //get all players 
  getPlayers() : Observable<any> {
    return this.http.get(this.url + '/players', {responseType:'json'})
  }

  deleteInfo(id:any) : Observable<any> {
    return this.http.delete(this.url + '/details/' +id, {responseType:'json'})
  }
}
