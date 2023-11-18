import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { schedules } from 'src/app/models/schedule';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  editForm : FormGroup
  protected formSubmitted : boolean = false;
  constructor(private formBuilder : FormBuilder,
    private playerService : PlayerServiceService,
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
      scheduleDate : new FormControl(null,[Validators.required]),
      scheduleTime : new FormControl(null,[Validators.required])
    })
  }

  assignFormValues(){
    let id = this.activatedRoute.snapshot.params['id']
    this.playerService.getScheduleById(id).subscribe((data) => {
      console.log(data);
      this.editForm.patchValue({
        id : data.id,
        name : data.name,
        scheduleDate : data.scheduleDate,
        scheduleTime : data.scheduleTime
      })
    })
  }

  editScheduleInfo(){
    const schedule : schedules = {
      id : this.editForm.controls['id'].value,
      name : this.editForm.controls['name'].value,
      scheduleDate : this.editForm.controls['scheduleDate'].value,
      scheduleTime : this.editForm.controls['scheduleTime'].value
     }
     console.log(schedule);
     this.playerService.updateSchedule(schedule).subscribe((data) => {
      console.log(data);
      this.router.navigate(['player/viewSchedule'])
     })
    

  }
}
