import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { teams } from 'src/app/models/team';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {


  teamForm: FormGroup;
  protected formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      id : new FormControl(null,[Validators.required]),
      teamName : new FormControl(null,[Validators.required])
    })
  }

  addTeam() {
    this.formSubmitted = true;
    const teamDetails: teams = {
      id : this.teamForm.controls['id'].value,
      teamName : this.teamForm.controls['teamName'].value
    }
    console.log(teamDetails, "team adding");
    this.adminService.addTeam(teamDetails).subscribe((data) => {
      console.log(data);
      this.teamForm.reset();
    })
  }

}
