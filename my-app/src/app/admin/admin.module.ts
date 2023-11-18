import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { SeriesComponent } from './series/series.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { PointsTableComponent } from './points-table/points-table.component';
import { SeriesDetailsComponent } from './series-details/series-details.component';
import { UpdateMatchComponent } from './update-match/update-match.component';
import { ContactUsInfoComponent } from './contact-us-info/contact-us-info.component';
import { EditTeamComponent } from './edit-team/edit-team.component';


// Angular Material Styles 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//guards
import { moduleGuard } from '../guards/module.guard';
import { ViewPlayerComponent } from './view-player/view-player.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { resolveGuard } from '../guards/resolve.guard';






const myRoute : Routes = [
  {path : '',component : TeamComponent},
  {path : 'teamcmp',component:TeamComponent},
  {path : 'editTeam/:id',component:EditTeamComponent},
  {path: 'playercmp',component:PlayerComponent},
  {path : 'playerview',component:ViewPlayerComponent,},
  {path : 'editPlayer/:id',component:EditPlayerComponent},
  {path : 'seriescmp',component:SeriesComponent},
  {path:'seriescmp/:id', component : SeriesComponent},
  {path:'schedulecmp', canMatch:[moduleGuard],component : ScheduleComponent},
  {path : 'seriesDetails',component:SeriesDetailsComponent},
  {path : 'matchDetails',component:UpdateMatchComponent},
  {path : 'pointsTable', component : PointsTableComponent},
  {path : 'contactInfo',component:ContactUsInfoComponent}
  

]


@NgModule({
  declarations: [
    TeamComponent,
    PlayerComponent,
    SeriesComponent,
    ScheduleComponent,
    PointsTableComponent,
    SeriesDetailsComponent,
    UpdateMatchComponent,
    ContactUsInfoComponent,
    EditTeamComponent,
    ViewPlayerComponent,
    EditPlayerComponent,
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
