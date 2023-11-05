import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  data : any;


  constructor(private router : Router) {}

  ngOnInit(): void {
    console.log(sessionStorage.getItem('role'));
  }

  get isAdmin(){
    return sessionStorage.getItem['role'] === 'admin';
  }

  get isPlayer() {
    return sessionStorage.getItem['role'] === 'player';
  }

  get isLogin() {
    return sessionStorage.getItem('isLoggedIn') === 'true'
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

  navigatePlayer1(){
    this.router.navigate(['player/playerDetails'])
  }

}
