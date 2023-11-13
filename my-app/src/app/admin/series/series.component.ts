import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { series } from 'src/app/models/series';
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
      seriesName: new FormControl(null, [Validators.required]),
      seriesDate : new FormControl(null,[Validators.required]),
      seriesTime : new FormControl(null,[Validators.required])
    })
  }

  addSeries(){
    this.formSubmitted = true;
    const seriesData : series  = {
      id : this.seriesForm.controls['id'].value,
      seriesName : this.seriesForm.controls['seriesName'].value,
      seriesDate : this.seriesForm.controls['seriesDate'].value,
      seriesTime : this.seriesForm.controls['seriesTime'].value
    }
    console.log(seriesData,"Player Form Data");
    this.adminService.addSeries(seriesData).subscribe((data) => {
      console.log(data);
      this.seriesForm.reset();
    })
  }

}
