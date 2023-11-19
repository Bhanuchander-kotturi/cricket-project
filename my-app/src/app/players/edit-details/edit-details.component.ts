import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { details } from 'src/app/models/player';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  editDetails : FormGroup
  protected formSubmitted : boolean = false

  constructor(private formBuilder : FormBuilder,
    private playerService : PlayerServiceService,
    private activatedRoute : ActivatedRoute,
    private router : Router) {
    
  }

  ngOnInit(): void {
    this.formInitilisation();
    this.assignFormValues();
  }

  formInitilisation(){
    this.editDetails = this.formBuilder.group({
      id : new FormControl(null,[Validators.required]),
      name : new FormControl(null,[Validators.required]),
      birthDay : new FormControl(null,[Validators.required]),
      age : new FormControl(null,[Validators.required]),
      team : new FormControl(null,[Validators.required]),
      batStyle : new FormControl(null,[Validators.required]),
      bowlStyle : new FormControl(null,[Validators.required])
    });
  }

  assignFormValues(){
    let id = this.activatedRoute.snapshot.params['id']
    this.playerService.getDetailsById(id).subscribe((data) => {
      console.log(data);
      this.editDetails.patchValue({
        id : data.id,
        name : data.name,
        birthDay : data.birthDay,
        age : data.age,
        team : data.team,
        batStyle : data.batStyle,
        bowlStyle : data.bowlStyle
      })
    })
  }

  editDetailsInfo(){
    const detail : details = {
      id : this.editDetails.controls['id'].value,
      name : this.editDetails.controls['name'].value,
      birthDay : this.editDetails.controls['birthDay'].value,
      age : this.editDetails.controls['age'].value,
      team : this.editDetails.controls['team'].value,
      batStyle : this.editDetails.controls['batStyle'].value,
      bowlStyle : this.editDetails.controls['bowlStyle'].value
    }
    console.log(detail);
    
    this.playerService.updateDetails(detail).subscribe((data) => {
      console.log(data);
      this.router.navigate(['player/updateDetails'])
    })
  }

}
