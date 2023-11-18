import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { timeInterval } from 'rxjs';
import { players } from 'src/app/models/adminPlayer';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  editForm : FormGroup
  protected formSubmitted : boolean = false;

  constructor(private formBuilder : FormBuilder,
    private adminService : AdminServiceService,
    private activatedRoute : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.formInitilisation();
    this.assignFormValues();
    
  }

  formInitilisation(){
    this.editForm = this.formBuilder.group({
      id : new FormControl(null,[Validators.required]),
      name : new FormControl(null,[Validators.required]),
      team : new FormControl(null,[Validators.required])
    })
  }

  assignFormValues(){
    let id = this.activatedRoute.snapshot.params['id']
    this.adminService.getPlayersById(id).subscribe((data) => {
      console.log(data);
      this.editForm.patchValue({
        id : data.id,
        name : data.name,
        team : data.team
      })
    })
  
  }

  editPlayerInfo(){
    const player : players = {
      id : this.editForm.controls['id'].value,
      name : this.editForm.controls['name'].value,
      team : this.editForm.controls['team'].value

    }
    console.log(player);
    this.adminService.updatePlayer(player).subscribe((data) => {
      this.router.navigate(['admin/playerview'])
    })
  }
}
