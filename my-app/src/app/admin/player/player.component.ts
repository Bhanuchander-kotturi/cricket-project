import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { players } from 'src/app/models/adminPlayer';
import { teams } from 'src/app/models/team';
import { AdminServiceService } from 'src/app/services/admin-service.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  // @Input() data? : string;

  url : string = 'http://localhost:3000';

  playerForm: FormGroup;
  protected formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      team : new FormControl(null,[Validators.required])
    })
  }

  addPlayer(){
    this.formSubmitted = true;
    const playerData : players  = {
      id : this.playerForm.controls['id'].value,
      name : this.playerForm.controls['name'].value,
      team : this.playerForm.controls['team'].value
    }
    console.log(playerData,"Player Form Data");
    this.adminService.addPlayer(playerData).subscribe((data) => {
      console.log(data);
      this.playerForm.reset();
    }) 
   }

}
