import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { SeriesComponent } from './series/series.component';
import { ScheduleComponent } from './schedule/schedule.component';

// Angular Material Styles 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PointsTableComponent } from './points-table/points-table.component';

const myRoute : Routes = [
  {path : 'teamcmp',component:TeamComponent},
  {path: 'playercmp',component:PlayerComponent},
  {path:'seriescmp', component : SeriesComponent},
  {path:'schedulecmp', component : ScheduleComponent},
  {path : 'pointsTable', component : PointsTableComponent}

]


@NgModule({
  declarations: [
    TeamComponent,
    PlayerComponent,
    SeriesComponent,
    ScheduleComponent,
    PointsTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myRoute),
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdminModule { }
