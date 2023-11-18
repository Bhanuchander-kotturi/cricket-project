import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private formBuilder: FormBuilder,
    private adminService : AdminServiceService,private activatedRoute : ActivatedRoute,
    private router : Router) {
    
  }
  ngOnInit(): void {
    this.formInitialisation();
    this.assignFormValues();
  }

  formInitialisation(){
    this.seriesForm = this.formBuilder.group({
      id: new FormControl(null, [Validators.required]),
      seriesName: new FormControl(null, [Validators.required]),
      seriesDate : new FormControl(null,[Validators.required]),
      seriesTime : new FormControl(null,[Validators.required])
    });
  }

  assignFormValues(){
    let id = this.activatedRoute.snapshot.params['id']
    this.adminService.getSeriesById(id).subscribe((data) => {
      console.log(data);
      this.seriesForm.patchValue({
        id : data.id,
        seriesName : data.seriesName,
        seriesDate : data.seriesDate,
        seriesTime : data.seriesTime
      })
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
    console.log(seriesData,"series Form Data");
    this.adminService.addSeries(seriesData).subscribe((data) => {
      console.log(data);
      this.seriesForm.reset();
    })
    this.adminService.updateSeries(seriesData).subscribe((data) => {
      console.log(data);
      this.router.navigate(['admin/seriesDetails'])
    })
    
  }

}
