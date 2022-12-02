import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TrackVehiclesComponent } from './track-vehicles.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Route[] = [
  {
    path: '',
    component: TrackVehiclesComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,

    RouterModule.forChild(routes)
  ]
})
export class TrackVehiclesModule { }
