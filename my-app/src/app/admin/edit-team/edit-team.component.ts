import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { teams } from 'src/app/models/team';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  // teams : any;
  editTeam : FormGroup;
  protected formSubmitted : boolean = false;


  constructor(private formBuilder : FormBuilder,
    private adminService : AdminServiceService,
    private activatedRoute : ActivatedRoute,
    private router : Router
    ){}

  ngOnInit(): void {
    this.formInitilisation();
    this.assignFormValue();
  }

  formInitilisation(){
    this.editTeam = this.formBuilder.group({
      id : new FormControl(null,[Validators.required]),
      teamName : new FormControl(null,[Validators.required])
    })
  }

  assignFormValue(){
    let id = this.activatedRoute.snapshot.params['id']
    this.adminService.getTeamById(id).subscribe((data) => {
      console.log(data);
      this.editTeam.patchValue({
        id : data.id,
        teamName : data.teamName
      })
    })
  }

  editTeamInfo(){
     const team : teams = {
      id : this.editTeam.controls['id'].value,
      teamName : this.editTeam.controls['teamName'].value
     }
     console.log(team);
     this.adminService.updateTeam(team).subscribe((data) => {
      console.log(data);
      this.router.navigate(['player/viewTeams'])
     })
  }

}
