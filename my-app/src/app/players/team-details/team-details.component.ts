import { Component,OnInit } from '@angular/core';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teams : any;

  constructor( private playerService : PlayerServiceService){}

  ngOnInit(): void {
    this.playerService.viewTeams().subscribe((data) => {
      this.teams = data;
      console.log(this.teams);
      
    })
  }

}
