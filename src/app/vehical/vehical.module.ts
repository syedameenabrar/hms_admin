import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { VehicalComponent } from './vehical.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Route[] = [
  {
    path: '',
    component: VehicalComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ]
})
export class VehicalModule { }
