import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { onedaySeries } from 'src/app/models/admin';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit{

  seriesForm : FormGroup;
  protected formSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder,private adminService : AdminServiceService) {
    
  }
  ngOnInit(): void {
    this.seriesForm = this.formBuilder.group({
      id: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required])
    })
  }

  addSeries(){
    this.formSubmitted = true;
    const seriesData : onedaySeries  = {
      id:this.seriesForm.controls['id'].value,
      name : this.seriesForm.controls['name'].value
    }
    console.log(seriesData,"Player Form Data");
    this.adminService.addPlayer(seriesData).subscribe((data) => {
      console.log(data);
      this.seriesForm.reset();
    })
  }

}
