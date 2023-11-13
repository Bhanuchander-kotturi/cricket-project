import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { AdminServiceService } from '../services/admin-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  protected formSubmitted : boolean = false;

  constructor(private authService  : AuthService,
          private formBuilder :FormBuilder, private router : Router ) {
  }

  ngOnInit(): void {
    // this.adminService.getAdminInfo('bhanu123','bhanu123').subscribe((data) => {
    //   console.log(data);
    // })
    this.loginForm = this.formBuilder.group({
      loginId : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required])
    })
  }

  login(){
    const data : any = {
      loginId : this.loginForm.controls['loginId'].value,
      password : this.loginForm.controls['password'].value
    }
    console.log(data);
    this.authService.getKeysInfo(data.loginId,data.password).subscribe((data) => {
      console.log(data);
      let roles = data[0];
      console.log(roles);
      sessionStorage.setItem('role',roles.role)
      sessionStorage.setItem('isLoggedIn','true')
      if(roles.role === 'admin'){
        this.router.navigate(['admin/teamcmp'])
      } else if(roles.role === 'player') {
        this.router.navigate(['player/playerDetails'])
      } 
    })
    
  }
}




  
    
  

