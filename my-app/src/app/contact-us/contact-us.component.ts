import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactusService } from '../services/contactus.service';
import { contacts } from '../models/contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {


  contactForm : FormGroup;
  protected formSubmitted : boolean = false;

  constructor(private formBuilder : FormBuilder,
    private contactUsService : ContactusService) {
    
  }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name : new FormControl(null,[Validators.required]),
      emailAddress : new FormControl(null,[Validators.required]),
      message : new FormControl(null,[Validators.required])
    })
  }

  addContact(){
    this.formSubmitted = true;
    const contactDetails : contacts = {
      name : this.contactForm.controls['name'].value,
      emailAdderss : this.contactForm.controls['emailAddress'].value,
      message : this.contactForm.controls['message'].value
    }
    console.log(contactDetails);
    this.contactUsService.addContact(contactDetails).subscribe((data) => {
      console.log(data);
      this.contactForm.reset();
    })
    
  }
}
