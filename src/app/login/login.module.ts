import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Route[] = [
  {
    path: '',
    component: LoginComponent
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
export class LoginModule { }
