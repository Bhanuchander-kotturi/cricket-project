import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddCredentialsComponent } from './add-credentials/add-credentials.component';


import { formDeactivateGuard } from './guards/form-deactivate.guard';
import { searchguardGuard } from './guards/searchguard.guard';
import { moduleGuard } from './guards/module.guard';


const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'home', component : HomeComponent},
  {path : 'aboutUs',component : AboutUsComponent},
  {path : 'login',component: LoginComponent},
  {path : 'contactUs',component : ContactUsComponent,canDeactivate:[formDeactivateGuard]},
  {path : 'keys',component:AddCredentialsComponent,canActivate:[searchguardGuard],canDeactivate:[formDeactivateGuard]},
  {
    path:'admin',loadChildren: () => import('../app/admin/admin.module').then(
      m => m.AdminModule)
  },
  {
    path : 'player', loadChildren : () => import('../app/players/players.module').then(
      m => m.PlayersModule
    )
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
