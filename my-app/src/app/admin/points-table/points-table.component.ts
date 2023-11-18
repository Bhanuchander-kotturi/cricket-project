import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit{

  updatePoints : any;

  constructor(private adminService : AdminServiceService,private router : Router) {
    
  }

  ngOnInit(): void {
    this.adminService.viewDetails().subscribe((data) => {
      this.updatePoints = data;
      console.log(this.updatePoints);
    })
  }




}
