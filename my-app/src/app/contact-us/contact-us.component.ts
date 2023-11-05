import { Component,OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent  implements OnInit{

  contactUsForm : FormGroup;
  protected formSubmitted: boolean = false;

  constructor(private formBuilder : FormBuilder) {
    
  }

  ngOnInit(): void {
    this.contactUsForm = this.formBuilder.group({
      firstName : new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      emailId : new FormControl(null,[Validators.required])
    })


  }

}
