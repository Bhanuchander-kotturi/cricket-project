import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { updatePoints } from 'src/app/models/point';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-update-match',
  templateUrl: './update-match.component.html',
  styleUrls: ['./update-match.component.css']
})
export class UpdateMatchComponent implements OnInit {

  updateForm : FormGroup;
  protected formSubmitted : boolean = false;

  constructor(private formBuilder : FormBuilder,
    private adminService : AdminServiceService,
    private activatedRoute : ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      id : new FormControl(null,[Validators.required]),
      teams : new FormControl(null,[Validators.required]),
      played : new FormControl(null,[Validators.required]),
      won : new FormControl(null,[Validators.required]),
      loss : new FormControl(null,[Validators.required]),
      points : new FormControl(null,[Validators.required])
    })
  }

  addMatches(){
    this.formSubmitted = true;
    const updateDetails : updatePoints = {
      id : this.updateForm.controls['id'].value,
      teams : this.updateForm.controls['teams'].value,
      played : this.updateForm.controls['played'].value,
      won : this.updateForm.controls['won'].value,
      loss : this.updateForm.controls['loss'].value,
      points : this.updateForm.controls['points'].value,
    }
    // console.log(updateDetails);
    this.adminService.addMatches(updateDetails).subscribe((data) => {
      console.log(data);
        this.updateForm.reset();
    })
  }



}
