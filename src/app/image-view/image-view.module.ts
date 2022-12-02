import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ImageViewComponent } from './image-view.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
const routes: Route[] = [
  {
    path: '',
    component: ImageViewComponent
  }
];

@NgModule({
  declarations: [
    ImageViewComponent
  ],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
    
  ]
})
export class ImageViewModule { }
