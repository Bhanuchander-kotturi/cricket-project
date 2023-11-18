import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  teams: any;

  constructor(private playerService: PlayerServiceService,
    private router: Router,
    private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.playerService.viewTeams().subscribe((data) => {
      this.teams = data;
      // console.log(this.teams);
    })
    this.adminService.getTeams().subscribe((data) => {
      this.teams = data;
      console.log(this.teams);
    })
  }

  deleteTeams(id: any) {
    // alert(id)
    this.playerService.deleteTeams(id).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/home", { skipLocationChange: true }).then(() => {
        this.router.navigate(['player/viewTeams'])
      })
    })
  }

  editTeam(id:any){
    this.router.navigate(['admin/editTeam/' +id])
  }

}
