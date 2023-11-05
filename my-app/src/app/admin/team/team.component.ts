import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import {team } from '../../models/admin';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamForm : FormGroup;
  protected formSubmitted : boolean = false;
  
  constructor(private formBuilder : FormBuilder,
    private adminService : AdminServiceService) {}

    ngOnInit(): void {
      this.teamForm = this.formBuilder.group({
        id : new FormControl(null,[Validators.required]),
        name : new FormControl(null,[Validators.required])
      })
    }

    addTeam(){
      this.formSubmitted = true;
      const teamData : team  = {
        id:this.teamForm.controls['id'].value,
        name : this.teamForm.controls['name'].value
      }
      console.log(teamData, "Team Form Data");
      this.adminService.addTeam(teamData).subscribe((data) => {
        console.log(data);
        this.teamForm.reset();
      })
      
    }

}
