import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {

  schedules: any;

  constructor(private playerService: PlayerServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.playerService.viewSchedule().subscribe((data) => {
      this.schedules = data;
      console.log(this.schedules);
    })
    this.playerService.getSchedule().subscribe((data) => {
      this.schedules = data;
      console.log(this.schedules);
    })
  }

  deleteSchedule(id: any) {
    // alert(id)
    this.playerService.deleteSchedule(id).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/home", { skipLocationChange: true }).then(() => {
        this.router.navigate(['player/viewSchedule'])
      })
    })
  }

  editSchedule(id: any) {
    this.router.navigate(['player/editSchedule/' + id])
  }

}
