//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { DetailsComponent } from './details/details.component';

// Angular Material Styles 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';


const myRoutings : Routes = [
  // {path : '',component:UpdateDetailsComponent},
  {path : 'playerDetails',component : UpdateDetailsComponent},
  {path : 'updateDetails',component:UpdateDetailsComponent},
  {path : 'viewTeams',component:TeamDetailsComponent},
  {path : 'viewSchedule',component:ScheduleDetailsComponent}
]


@NgModule({
  declarations: [
    DetailsComponent,
    UpdateDetailsComponent,
    TeamDetailsComponent,
    ScheduleDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoutings),
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class PlayersModule { }
