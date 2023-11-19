import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit{

  details : any;

  constructor(private playerService : PlayerServiceService,
    private activatedRoute : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.playerService.viewDetails().subscribe((data) => {
      this.details = data;
      console.log(this.details);
    })
    this.playerService.getDetails().subscribe((data) => {
      this.details = data
      console.log(this.details);
      
    })
  }

  deleteInfo(id:any){
    // alert(id)
    this.playerService.deleteInfo(id).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/home", { skipLocationChange: true }).then(() => {
        this.router.navigate(['player/updateDetails'])
      })
    })
  }

  editInfo(id:any) {
    this.router.navigate(['player/editInfo/' +id])
  }
}
