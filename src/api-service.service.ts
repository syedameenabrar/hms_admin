import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';

const loginTokens = new HttpHeaders({
  Authorization: 'Bearer ' + localStorage.getItem('logToken'),
});

const tokens = { headers: loginTokens };

const loconavTokens = new HttpHeaders({
  Authorization: 'AW8KFZ8fUyxvCFVsN9_o',
});

const loconavTracktoken = { headers: loconavTokens };

const boshToken = new HttpHeaders({
  Authorization:  'Bearer ' + localStorage.getItem('boshToken'),
});

const boshTrackingToken = { headers: boshToken };

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements OnInit  {

  Global_URL: string = environment.globalUrl;

  constructor(public http: HttpClient) {
    console.log(localStorage.getItem('logToken'));

  }
  
  ngOnInit(): void {
  console.log(localStorage.getItem('logToken'));

  }


  

  loginDetails(data: any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.post(
      `https://hms-transportation-dev.herokuapp.com/auth/login`,
      data
    );
  }

  getLoginDetails() {
    console.log(localStorage.getItem('logToken'));

    return this.http.get(
      `https://hms-transportation-dev.herokuapp.com/user`,tokens
    );
  }

  
  getLrData() {
    console.log(localStorage.getItem('logToken'));

    return this.http.get(
      `https://hms-transportation-dev.herokuapp.com/driver`,tokens
    );
  }
  


  deletetLrData(id:any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.delete(
      `https://hms-transportation-dev.herokuapp.com/driver/${id}`,tokens
    );
  }
  

  driverRegister(data: any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.post(
      `https://hms-transportation-dev.herokuapp.com/user`,
      data,tokens
    );
  }

  addRoutes(data: any) {
  console.log(localStorage.getItem('logToken'));

    return this.http.post(
      `https://hms-transportation-dev.herokuapp.com/route`,
      data,tokens
    );
  }

  addVehicle(data: any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.post(
      `https://hms-transportation-dev.herokuapp.com/vehicle`,
      data,tokens
    );
  }

  deleteRoutes(data: any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.delete(
      `https://hms-transportation-dev.herokuapp.com/route/${data}`,tokens
    );
  }

  deleteLogins(data: any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.delete(
      `https://hms-transportation-dev.herokuapp.com/user/${data}`,tokens
    );
  }

  deleteVehicle(data: any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.delete(
      `https://hms-transportation-dev.herokuapp.com/vehicle/${data}`,tokens
    );
  }

  getVehicles() {
    console.log(localStorage.getItem('logToken'));

    return this.http.get(
      `https://hms-transportation-dev.herokuapp.com/vehicle`,tokens
    );
  }

  getRoutes() {
    console.log(localStorage.getItem('logToken'));

    return this.http.get(
      `https://hms-transportation-dev.herokuapp.com/route`,tokens
    );
  }

  addImages(data: any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.post(
      `https://m6s61q63f1.execute-api.us-west-1.amazonaws.com/dev/project/post`,
      data
    );
  }

  postImageDetails(data: any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.post(
      `https://m6s61q63f1.execute-api.us-west-1.amazonaws.com/dev/driver/post`,
      data
    );
  }

  getImageDetails() {
    console.log(localStorage.getItem('logToken'));

    return this.http.get(
      `https://m6s61q63f1.execute-api.us-west-1.amazonaws.com/dev/driver/get`
    );
  }

  getImages() {
    console.log(localStorage.getItem('logToken'));

    return this.http.get(
      `https://m6s61q63f1.execute-api.us-west-1.amazonaws.com/dev/project/get`
    );
  }
  trackVehicle() {
    console.log(localStorage.getItem('logToken'));

    return this.http.get(
      `https://loconav.com/api/v3/device/all_devices_with_count?start_index=0&end_index=100`,loconavTracktoken
    );
  }
  getMapData(url:any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.get(
      `${url}`
    );
  }
  otherVehiclesTracking(){
    console.log(localStorage.getItem('logToken'));

    return this.http.get(
      // `http://globalgps.in:8089/api/v1/LiveDataDetails?userid=PASHAHMS`
      // `http://globalgps.in:8089/api/v1/LiveTrackDetailsLive/PASHAHMS`
      `${this.Global_URL}/api/v1/LiveTrackDetailsLive/PASHAHMS`
    );
  }

  travicLogin(data:any) {

    return this.http.post(
      // `https://trackingapi-dev.bosch-travis.com/api/auth/login`,data
      `https://trackingapi.bosch-travis.com/api/auth/login`,data
    );
  }

  lrTrackingBosch(data:any) {
    console.log(localStorage.getItem('boshToken'));

    return this.http.post(
      // `https://trackingapi-dev.bosch-travis.com/api/lr/tracking`,data,boshTrackingToken
      `https://trackingapi.bosch-travis.com/api/lr/tracking`,data,boshTrackingToken
    );
  }

  updateBoshSubmittions(data:any) {
    console.log(localStorage.getItem('logToken'));

    return this.http.post(
      `https://hms-transportation-dev.herokuapp.com/driver/bosch`,data,tokens
    );
  }

  updateEpod(data:any) {
    console.log(localStorage.getItem('boshToken'));

    return this.http.post(
      // `https://trackingapi-dev.bosch-travis.com/api/lr/epod`,data,boshTrackingToken
      `https://trackingapi.bosch-travis.com/api/lr/epod`,data,boshTrackingToken
    );
  }

  download(url:any) {
    return this.http.get(`${url}`);
}
}
