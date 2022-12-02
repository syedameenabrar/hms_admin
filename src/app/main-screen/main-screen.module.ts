import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MainScreenComponent } from './main-screen.component';
import { DriverLoginsComponent } from './driver-logins/driver-logins.component';
import { AssignRoutesComponent } from './assign-routes/assign-routes.component';
import { FormsModule } from '@angular/forms';
import { TrackVehiclesComponent } from './track-vehicles/track-vehicles.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Route[] = [
  {
    path: '',
    component: MainScreenComponent
  }
];
@NgModule({
  declarations: [
  
    DriverLoginsComponent,
       AssignRoutesComponent,
       TrackVehiclesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ]
})
export class MainScreenModule { }
