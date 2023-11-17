import { Component,OnInit } from '@angular/core';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit{

  details : any;

  constructor(private playerService : PlayerServiceService){}

  ngOnInit(): void {
    this.playerService.viewDetails().subscribe((data) => {
      this.details = data;
      console.log(this.details);
      
    })
  }
}
