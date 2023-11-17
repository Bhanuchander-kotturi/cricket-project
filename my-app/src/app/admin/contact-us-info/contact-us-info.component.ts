import { Component,OnInit } from '@angular/core';
import { ContactusService } from 'src/app/services/contactus.service';

@Component({
  selector: 'app-contact-us-info',
  templateUrl: './contact-us-info.component.html',
  styleUrls: ['./contact-us-info.component.css']
})
export class ContactUsInfoComponent implements OnInit{

  contacts : any;

  constructor(private contactUsService : ContactusService){}

  ngOnInit(): void {
    this.contactUsService.viewContact().subscribe((data) => {
      this.contacts = data;
      console.log(this.contacts);
    })
  }
}
