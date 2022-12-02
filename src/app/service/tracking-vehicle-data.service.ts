import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackingVehicleDataService {

  constructor(private http:HttpClient) { }

  getGlobalApiData(){
    return this.http.get(`http://globalgps.in:8089/api/v1/LiveDataDetails?userid=PASHAHMS`)
  }
}
