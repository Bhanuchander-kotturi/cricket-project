import { Component, OnInit,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  user : string = 'BHANUCHANDER';
  data : any;
  // adminCheck : Observable<any>;
  // playerCheck : Observable<any>;
  // noneCheck : Observable<any>;

  constructor(private router : Router) {}

  ngOnInit(): void {
    console.log(sessionStorage.getItem('role'));
  }

  get isAdmin(){
    return sessionStorage.getItem('role') === 'admin'
  }

  get isPlayer(){
    return sessionStorage.getItem('role') === 'player'
  }

  get isLogin() {
    return sessionStorage.getItem('isLoggedIn') === 'true'
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['login'])
  }

  navigateHome() {
    this.router.navigate(['home']);
  }

  navigateAboutUs() {
    this.router.navigate(['aboutUs']);
  }

  navigateLogin(){
    this.router.navigate(['login'])
  }

  navigateContactUs(){
    this.router.navigate(['contactUs'])
  }
  
  credentials(){
    this.router.navigate(['keys'])
  }


  navigateAdmin1(){
    this.router.navigate(['admin/teamcmp'])
  }

  navigateAdmin2(){
    this.router.navigate(['admin/playercmp'])
  }

  navigateAdmin3(){
    this.router.navigate(['admin/seriescmp'])
  }

  navigateAdmin4(){
    this.router.navigate(['admin/schedulecmp'])
  }

  navigateAdmin5(){
    this.router.navigate(['admin/pointsTable'])
  }

  navigateContactInfo(){
    this.router.navigate(['admin/contactInfo'])
  }

  seriesDetails(){
    this.router.navigate(['admin/seriesDetails'])
  }

  matchDetails(){
    this.router.navigate(['admin/matchDetails'])
  }

  navigatePlayer1(){
    this.router.navigate(['player/playerDetails'])
  }

  updateDetails(){
    this.router.navigate(['player/updateDetails'])
  }

  viewTeams(){
    this.router.navigate(['player/viewTeams'])
  }

  viewSchedule(){
    this.router.navigate(['player/viewSchedule'])
  }

}
