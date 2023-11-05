import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { schedule } from 'src/app/models/admin';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  scheduleForm : FormGroup;
  protected formSubmitted: boolean = false;

  constructor(private formBuilder : FormBuilder,private adminService : AdminServiceService) {
    
  }

  ngOnInit(): void {
    this.scheduleForm = this.formBuilder.group({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required])
    })
  }

  addSchedule(){
    this.formSubmitted = true;
    const scheduleData : schedule  = {
      id:this.scheduleForm.controls['id'].value,
      name : this.scheduleForm.controls['name'].value
    }
    console.log(scheduleData,"Player Form Data");
    this.adminService.addPlayer(scheduleData).subscribe((data) => {
      console.log(data);
      this.scheduleForm.reset();
    })
  }

}
