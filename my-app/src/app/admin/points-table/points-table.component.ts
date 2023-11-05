import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {

  admin : any;
  points : any;

  constructor(private adminService : AdminServiceService,private router : Router,
    private activatedRoute : ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.admin = this.activatedRoute.snapshot.data['adminData']
    console.log(this.admin);
    
    this.adminService.getAdmin().subscribe((data) => {
      this.admin = data;
      console.log(this.admin)
    })
  }

}
