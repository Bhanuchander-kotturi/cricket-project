import { Component,OnInit } from '@angular/core';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {

  schedules : any;

  constructor(private playerService : PlayerServiceService) {}

  ngOnInit(): void {
    this.playerService.viewSchedule().subscribe((data) => {
      this.schedules = data;
      console.log(this.schedules);
    })
  }

}
