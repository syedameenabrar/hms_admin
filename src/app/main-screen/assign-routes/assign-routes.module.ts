import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AssignRoutesComponent } from './assign-routes.component';
import { NgxSpinnerModule } from 'ngx-spinner';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: AssignRoutesComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // BrowserModule,
    // FormsModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule,

  ]
})
export class AssignRoutesModule { }
