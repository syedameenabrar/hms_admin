import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Route[] = [
  {
    path: '',
    component: ImageUploadComponent
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ImageUploadModule { }
