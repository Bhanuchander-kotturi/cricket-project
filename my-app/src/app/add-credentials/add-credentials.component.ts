import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { credentials} from 'src/app/models/keys';

@Component({
  selector: 'app-add-credentials',
  templateUrl: './add-credentials.component.html',
  styleUrls: ['./add-credentials.component.css']
})
export class AddCredentialsComponent implements OnInit {

  credForm : FormGroup;
  protected formSubmitted : boolean = false;

  constructor(private formBuilder : FormBuilder,
    private authService : AuthService){}


  ngOnInit(): void {
    this.credForm = this.formBuilder.group({
      id : new FormControl(null,[Validators.required]),
      role : new FormControl(null,[Validators.required]),
      loginId : new FormControl(null,[Validators.required]),
      password : new FormControl(null,[Validators.required])
    })
    
  }

  addKeys(){
    this.formSubmitted = true;
    const details : credentials = {
      id : this.credForm.controls['id'].value,
      role : this.credForm.controls['role'].value,
      loginId : this.credForm.controls['loginId'].value,
      password : this.credForm.controls['password'].value
    }
    console.log(details);
    this.authService.addKeys(details).subscribe((data) => {
      console.log(data);
      this.credForm.reset();
    })
    
  }

}
