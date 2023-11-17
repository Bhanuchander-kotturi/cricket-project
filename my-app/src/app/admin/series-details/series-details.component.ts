import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { series } from 'src/app/models/series';

@Component({
  selector: 'app-series-details',
  templateUrl: './series-details.component.html',
  styleUrls: ['./series-details.component.css']
})
export class SeriesDetailsComponent implements OnInit {
  title : any;
  series : any; 

  constructor(private adminService : AdminServiceService,private router : Router) {
    
  }

  ngOnInit(): void {
    this.title = "welcome to series details ";
    this.adminService.viewSeries().subscribe((data) => {
      this.series = data;
      console.log(this.series);
    })
  }

}
