import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverLoginsComponent } from './driver-logins.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Route[] = [
  {
    path: '',
    component: DriverLoginsComponent
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
export class DriverLoginsModule { }
