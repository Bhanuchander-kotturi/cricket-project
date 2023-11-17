import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { details } from 'src/app/models/player';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // detail : details;

  detailsForm: FormGroup;
  protected formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private playerService : PlayerServiceService) { }

  ngOnInit(): void {
    this.detailsForm = this.formBuilder.group({
      id : new FormControl(null,[Validators.required]),
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
      id : this.detailsForm.controls['id'].value,
      name: this.detailsForm.controls['name'].value,
      birthDay: this.detailsForm.controls['birthDay'].value,
      age: this.detailsForm.controls['age'].value,
      team: this.detailsForm.controls['team'].value,
      batStyle: this.detailsForm.controls['batStyle'].value,
      bowlStyle: this.detailsForm.controls['bowlStyle'].value
    }
    console.log(dataDetails, "Employee Form Data");

  this.playerService.addDetails(dataDetails).subscribe((data) => {
    console.log(data);
    this.detailsForm.reset();
  })

  }
}
