import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const validToken = localStorage.getItem('logToken');
let redirect =""

if(validToken){
  redirect = "/main";
}else{
  redirect = "/login";

}

const routes: Routes = [
  {
    path: 'image-view',
    loadChildren: () => import('./image-view/image-view.module').then(o => o.ImageViewModule)
  },
  {
    path: 'image-upload',
    loadChildren: () => import('./image-upload/image-upload.module').then(o => o.ImageUploadModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main-screen/main-screen.module').then(o => o.MainScreenModule)
  },
  {
    path: 'driver-details',
    loadChildren: () => import('./main-screen/driver-logins/driver-logins.module').then(o => o.DriverLoginsModule)
  },
  {
    path: 'assign-routes',
    loadChildren: () => import('./main-screen/assign-routes/assign-routes.module').then(o => o.AssignRoutesModule)
  },
  {
    path: 'track-vehicle',
    loadChildren: () => import('./main-screen/track-vehicles/track-vehicles.module').then(o => o.TrackVehiclesModule)
  },
  {
    path: 'vehical',
    loadChildren: () => import('./vehical/vehical.module').then(o => o.VehicalModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(o => o.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(o => o.RegisterModule)
  },
  {
    path: '',
    // redirectTo: '/main',
    redirectTo: redirect,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
