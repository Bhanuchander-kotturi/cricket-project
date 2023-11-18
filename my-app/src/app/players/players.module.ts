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
import { T20TableComponent } from './t20-table/t20-table.component';
import { OdiTableComponent } from './odi-table/odi-table.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';



const myRoutings : Routes = [
  {path : 'formDetails',component : DetailsComponent},
  {path : 'updateDetails',component:UpdateDetailsComponent},
  {path : 'viewTeams',component:TeamDetailsComponent},
  {path : 'viewSchedule',component:ScheduleDetailsComponent},
  {path : 'editSchedule/:id',component:EditScheduleComponent},
  {path : 'viewtable1',component:T20TableComponent},
  {path : 'viewtable2',component:OdiTableComponent},
]


@NgModule({
  declarations: [
    DetailsComponent,
    UpdateDetailsComponent,
    TeamDetailsComponent,
    ScheduleDetailsComponent,
    T20TableComponent,
    OdiTableComponent,
    EditScheduleComponent,
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
