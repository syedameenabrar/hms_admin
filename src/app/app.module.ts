import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { VehicalComponent } from './vehical/vehical.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Route[] = [
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ImageUploadComponent,
    MainScreenComponent,
    VehicalComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // RouterModule.forChild(routes),
    RouterModule.forRoot(
      routes,
      { enableTracing: true, useHash: true }
    ),
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
