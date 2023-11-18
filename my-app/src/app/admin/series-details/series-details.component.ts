import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private adminService : AdminServiceService,
    private router : Router, private activatedRoute : ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.title = "welcome to series details ";
    this.adminService.viewSeries().subscribe((data) => {
      this.series = data;
      // console.log(this.series);
    })
    this.adminService.getSeries().subscribe((data) => {
      this.series = data;
      console.log(this.series);
    })
  }


  deleteSeries(id:any) {
    // alert(id)
    this.adminService.deleteSeries(id).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl("/admin/seriesDetails", { skipLocationChange:true }).then(() => {
        this.router.navigate(['seriesDetails'])
      })
    })
  }

  editSeries(id:any){
    // alert(id)
    this.router.navigate(['admin/seriescmp/'+id])
  }

  

}
