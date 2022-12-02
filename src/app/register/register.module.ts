import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Route[] = [
  {
    path: '',
    component: RegisterComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class RegisterModule { }
