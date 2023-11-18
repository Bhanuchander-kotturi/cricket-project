import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css']
})
export class ViewPlayerComponent implements OnInit{

  players : any;

  constructor(private adminService : AdminServiceService,
    private router : Router,
    private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.adminService.viewPlayers().subscribe((data) => {
      this.players = data;
      console.log(this.players);
    })
    // this.players = this.activatedRoute.snapshot.data['playersData']
    // console.log(this.players);
    
    this.adminService.getPlayers().subscribe((data) => {
      this.players = data;
      console.log(this.players);
    })
  }

  deletePlayer(id : any) {
    // alert(id) 
    this.adminService.deletePlayer(id).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/home", { skipLocationChange : true}).then(() => {
        this.router.navigate(['admin/playerview'])
      })
    })
  }

  editPlayer(id : any) {
    this.router.navigate(['admin/editPlayer/' +id])
  }

}
