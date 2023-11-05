import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../services/admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  protected formSubmitted : boolean = false;

  constructor(private adminService : AdminServiceService,
          private formBuilder :FormBuilder, private router : Router ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      adminId:new FormControl(null,[Validators.required]),
      adminPassword : new FormControl(null,[Validators.required])
    }) 
  }

  loginAdmin(){
    const data : any = {
      adminId : this.loginForm.controls['adminId'].value,
      password : this.loginForm.controls['password'].value
    }
    console.log(data);
    
    // this.adminService.getAdminInfo(data.adminId,data.password).subscribe((data) => {
    //   console.log(data);
    //   let admin = data[0];
    //   console.log(admin)
    //   sessionStorage.setItem('role', admin.role)
    //   sessionStorage.setItem('name', admin.name)
    //   sessionStorage.setItem('isLoggedIn', 'true')
    // })
  }


}
