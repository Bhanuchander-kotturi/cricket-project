import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { schedules } from 'src/app/models/schedule';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  scheduleForm : FormGroup;
  protected formSubmitted: boolean = false;

  constructor(private formBuilder : FormBuilder,
    private adminService : AdminServiceService) { 
  }

  ngOnInit(): void {
    this.scheduleForm = this.formBuilder.group({
      id: new FormControl(null, [Validators.required]),
      name : new FormControl(null,[Validators.required]),
      opponent : new FormControl(null,[Validators.required]),
      scheduleDate : new FormControl(null,[Validators.required]),
      scheduleTime : new FormControl(null,[Validators.required])
    })
  }

  addSchedule(){
    this.formSubmitted = true;
    const scheduleData : schedules  = {
      id : this.scheduleForm.controls['id'].value,
      name : this.scheduleForm.controls['name'].value,
      opponent : this.scheduleForm.controls['opponent'].value,
      scheduleDate : this.scheduleForm.controls['scheduleDate'].value,
      scheduleTime :  this.scheduleForm.controls['scheduleTime'].value
    }
    console.log(scheduleData);
    this.adminService.addSchedule(scheduleData).subscribe((data) => {
      console.log(data);
      this.scheduleForm.reset();
    })
  }

}
