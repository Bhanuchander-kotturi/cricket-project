import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { details } from 'src/app/models/player';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsForm: FormGroup;
  protected formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
    this.detailsForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      birthDay: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required]),
      team: new FormControl(null, [Validators.required]),
      batStyle: new FormControl(null, [Validators.required]),
      bowlStyle: new FormControl(null, [Validators.required])
    })
  }

  addDetails() {
    this.formSubmitted = true;
    const dataDetails: details = {
      name: this.detailsForm.controls['name'].value,
      birthDay: this.detailsForm.controls['birthDay'].value,
      age: this.detailsForm.controls['age'].value,
      team: this.detailsForm.controls['team'].value,
      batStyle: this.detailsForm.controls['batStyle'].value,
      bowlStyle: this.detailsForm.controls['bowlStyle'].value
    }
    console.log(dataDetails, "Employee Form Data");
    
  }
}
