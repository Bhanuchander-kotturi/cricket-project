import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contacts } from '../models/contact';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  url: string = 'http://localhost:3000'
  
  constructor(private http : HttpClient) { }

  addContact(contact : contacts) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders({'Content-Type' : 'application/json'})
    }
    return this.http.post(this.url + '/contacts',contact,httpOptions)
  }

  viewContact() : Observable<any>{
    return this.http.get(this.url + '/contacts',{responseType : 'json'})
  }
}
