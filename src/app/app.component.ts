import { Component } from '@angular/core';
import { ApiServiceService } from 'src/api-service.service';
import { interval, Observable, Observer } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count: string = '';
  globalCount: string = '';
  tCount: string = '';
  dataTrack: any;
  globalTrack: any;
  trackData: any;
 timeStamp:any;
 globalResponce:boolean = false;
 locoNavResponce:boolean = false;
 boschGlobalResponce:boolean = false;
 boschLocoNavResponce:boolean = false;
 boschLoginResponce:boolean = false;
 hmsLoginResponce:boolean = false;
 boschLoginTime:any ='';
 hmsLoginTime:any = '';
 locoNavResponseTime:any = '';
 globalResponseTime:any = '';

 lrNotFoundLocoNav:any[]=[];
 lrNotFoundGlobal:any[]=[];

  constructor(
    private Api: ApiServiceService,private spinner: NgxSpinnerService
  ) {
  
  }



ngOnInit(): void {
  this.timeStamp = localStorage.getItem('apiCallingTime') ? localStorage.getItem('apiCallingTime') :'00';
  
  this.traviceLogin();
  this.adminLogin();
  this.globalApi();
    this.locoNav();
  interval(3.6e+6).subscribe((func:any) => {
    this.traviceLogin()

  })

  interval(8.64e+7).subscribe((func:any) => {
    this.adminLogin();

  })

  interval(900000).subscribe((func:any) => {
    this.globalApi();
    this.locoNav();
  


  })
  
 
}

manualDataSend(){
  this.globalApi();
    this.locoNav();
}



adminLogin(){
  const data = {
    email:'admin@gmail.com',
    password:"hms@admin1",
  }


  this.spinner.show();

  this.Api.loginDetails(data).subscribe((res:any)=>{
    const resData = res

    if(res.message == "Successfully User login" && resData.data.user.accountType == "admin"){
      this.hmsLoginResponce = true;
      this.hmsLoginTime = new Date();
    localStorage.setItem("logToken",resData.data.user.token)

      // this.router.navigate(['/main']);

    }
    else if(resData.data.user.accountType == "Driver"){
      // alert("Try with Admin credentials");
      this.hmsLoginResponce = false;
    }
    else{
      // alert("Something went wrong");
      this.hmsLoginResponce = false;
      this.adminLogin()

    }

    this.spinner.hide();  

    
  },(err)=>{
    if(err.error.message == "Invalid Password"){
      alert("Invalid Password");

    }
    else if(err.error.message == "User not found"){
      alert("User not found");

    }
    else{
      alert("Something went wrong");
this.adminLogin()
    }
    this.spinner.hide();  
  })
}

traviceLogin(){
  const data = {
    "userDetails": {
      "emailId": "hmstransportationservices@gmail.com",
      "password": "Asmeraali@786"
    }
  }

  this.Api.travicLogin(data).subscribe((res:any) => {

    
    if(res.message == "Token is valid for 1 hour"){
      this.boschLoginResponce = true;
      this.boschLoginTime = new Date();
      localStorage.setItem('boshToken',res.token) 
    }
    else{
      this.boschLoginResponce = false;
      alert("Travis Login Issue");
    }
    
  },
  (err:any)=>{
    this.boschLoginResponce = false;
    alert("Travis Login Issue");
  })
}



locoNav() {
  this.spinner.show();

  this.Api.trackVehicle().subscribe((res: any) => {
    this.locoNavResponce = true;
    this.locoNavResponseTime = new Date();
    const resData = res.data;
    this.count = res.count;
    this.tCount = this.globalCount + this.count
    this.dataTrack = res.data;
    this.spinner.hide();


    if (res) {
      this.Api.getLrData().subscribe((res: any) => {
        const lrDataApi = res.data;
        lrDataApi.forEach((element: any) => {
          this.dataTrack.forEach((resEle: any) => {
            if (resEle.data.vehicle_number == element.vehicleNumber.vehicleNumber) {
              this.lrNotFoundLocoNav = [];
              if (element.shipmentInTransit && element.boschInTransit && element.shipmentDelivered && !element.boschDelivered) {
                const lrDetailsBosch = {
                  "lrTrackingDetails": {
                    "lspId": "0097006812",
                    "lrNumber": element.lrNumber,
                    "lrStatus": "Shipment Delivered",
                    "latitude": resEle.data.cordinate[0],
                    "longitude": resEle.data.cordinate[1],
                    "location": resEle.data.address,
                    "pickUpDate": element.createdAt.split("T")[0],
                    "lrDate": element.createdAt.split("T")[0],
                    "actualDeliveredDate": element.createdAt.split("T")[0],
                    "edd": element.createdAt.split("T")[0],
                    "receiverName": "Receiver name at the source",
                    "deliveredToPerson": "Reciever name at the final destination",
                    "actualWeight": "10",
                    "numberOfPackages": "10",
                    "length": 100.001,
                    "breadth": 100.001,
                    "height": 100.001,
                    "truckType": "LTL",
                    "truckTonnage": "16 T",
                    "deliveryNotes": "Delivery Notes",
                    "vehicleNo": resEle.data.vehicle_number
                  }
                }

                this.Api.lrTrackingBosch(lrDetailsBosch).subscribe((lrRes: any) => {

                  if (lrRes.message == "Successfully inserted tracking Details" || lrRes.message == "Shipment is already Delivered!") {
                    this.boschLocoNavResponce = true;
                    const upData =
                    {
                      "type": "DELIVERED",
                      "lrNumber": element.lrNumber
                    }

                    this.Api.updateBoshSubmittions(upData).subscribe((upd: any) => {

                      message: "Successfully Bosch API Updated"

                    },
                      (err: any) => {

                      }
                    )
                  }
                  else if(lrRes.message == "LR Number & LSP ID Not found"){
                    this.boschLocoNavResponce = true;
                    this.lrNotFoundLocoNav.push(element.lrNumber);

                  }
                  else{
                    this.boschLocoNavResponce = false;
                  }


                },
                  (err: any) => {
                    this.boschLocoNavResponce = false;
                  }
                )

              }
              else if (element.shipmentInTransit && !element.boschDelivered) {
              // if (element.shipmentInTransit && !element.boschInTransit) {
                const lrDetailsBosch = {
                  "lrTrackingDetails": {
                    "lspId": "0097006812",
                    "lrNumber": element.lrNumber,
                    "lrStatus": "Shipment In Transit",
                    "latitude": resEle.data.cordinate[0],
                    "longitude": resEle.data.cordinate[1],
                    "location": resEle.data.address,
                    "pickUpDate": element.createdAt.split("T")[0],
                    "lrDate": element.createdAt.split("T")[0],
                    "actualDeliveredDate": "",
                    "edd": element.createdAt.split("T")[0],
                    "receiverName": "Receiver name at the source",
                    "deliveredToPerson": "Reciever name at the final destination",
                    "actualWeight": "10",
                    "numberOfPackages": "10",
                    "length": 100.001,
                    "breadth": 100.001,
                    "height": 100.001,
                    "truckType": "LTL",
                    "truckTonnage": "16 T",
                    "deliveryNotes": "Delivery Notes",
                    "vehicleNo": resEle.data.vehicle_number
                  }
                }



                this.Api.lrTrackingBosch(lrDetailsBosch).subscribe((lrRes: any) => {
                  if (lrRes.message == "Successfully inserted tracking Details" || lrRes.message == "Shipment is already Delivered!") {
                    this.boschLocoNavResponce = true;
                    const upData =
                    {
                      "type": "TRANSIT",
                      "lrNumber": element.lrNumber
                    }

                    this.Api.updateBoshSubmittions(upData).subscribe((upd: any) => {


                    }
                    )
                  }
                  else if(lrRes.message == "LR Number & LSP ID Not found"){
                    this.boschLocoNavResponce = true;
                    this.lrNotFoundLocoNav.push(element.lrNumber);
                    

                  }
                  else{
                    this.boschLocoNavResponce = false;
                  }

                })

              }
              
              else if (element.boschInTransit  && element.boschDelivered && !element.ePoDUploaded) {
                const epodUpdate = {
                  "lrNumber": element.lrNumber,
                  "lspId": "0097006812",
                  "epod": element.deliveredBase64
                }
                

              
                this.Api.updateEpod(epodUpdate).subscribe((lrRes: any) => {
                
                  if (lrRes.message == "File Successfully uploaded") {
                    this.boschLocoNavResponce = true;
                    const upData =
                    {
                      "type": "EPOD",
                      "lrNumber": element.lrNumber
                    }

                    this.Api.updateBoshSubmittions(upData).subscribe((upd: any) => {
                      
                      // message: "Successfully Bosch API Updated"

                    },
                      (err: any) => {

                      }
                    )
                  }
                  else{
                    this.boschLocoNavResponce = false;
                  }


                },
                  (err: any) => {
                    this.boschLocoNavResponce = false;
                  }
                )
               

              }
              else {
                // this.boschLocoNavResponce = false;
              }
            }
          });


        });



      }
        ,
        (err: any) => {

        }
      )



    } else {
    this.locoNavResponce = false;
      alert("Go back and come again, something went wrong");
    }

    this.timeStamp = new Date();
    localStorage.setItem('apiCallingTime', this.timeStamp.toString());

  }, (err) => {
    this.spinner.hide();
    this.locoNavResponce = false;


  })
}

globalApi() {
  this.spinner.show();

  this.Api.otherVehiclesTracking().subscribe((res: any) => {
    this.globalResponseTime = new Date();
    const resData = res;
    this.globalCount = resData.length
    this.count = res.count;
    this.globalTrack = res;
    // this.spinner.hide();  

    if (res) {

      this.Api.getLrData().subscribe((res: any) => {
        const lrDataApi = res.data;
        this.globalResponce = true;
        lrDataApi.forEach((element: any) => {

          this.globalTrack.forEach((globEle: any) => {
            if (globEle.vehicleNo == element.vehicleNumber.vehicleNumber) {
              this.lrNotFoundGlobal = [];
              if (element.shipmentInTransit && element.boschInTransit && element.shipmentDelivered && !element.boschDelivered) {

                const lrDetailsBosch = {
                  "lrTrackingDetails": {
                    "lspId": "0097006812",
                    "lrNumber": element.lrNumber,
                    "lrStatus": "Shipment Delivered",
                    "latitude": globEle.latitude,
                    "longitude": globEle.longitude,
                    "location": globEle.address,
                    "pickUpDate": element.createdAt.split("T")[0],
                    "lrDate": element.createdAt.split("T")[0],
                    "actualDeliveredDate": element.createdAt.split("T")[0],
                    "edd": element.createdAt.split("T")[0],
                    "receiverName": "Receiver name at the source",
                    "deliveredToPerson": "Reciever name at the final destination",
                    "actualWeight": "10",
                    "numberOfPackages": "10",
                    "length": 100.001,
                    "breadth": 100.001,
                    "height": 100.001,
                    "truckType": "LTL",
                    "truckTonnage": "16 T",
                    "deliveryNotes": "Delivery Notes",
                    "vehicleNo": globEle.vehicleNo
                  }
                }


                this.Api.lrTrackingBosch(lrDetailsBosch).subscribe((lrRes: any) => {
              
                  if (lrRes.message == "Successfully inserted tracking Details" || lrRes.message == "Shipment is already Delivered!") {
                    this.boschGlobalResponce = true;
                    const upData =
                    {
                      "type": "DELIVERED",
                      "lrNumber": element.lrNumber
                    }

                    this.Api.updateBoshSubmittions(upData).subscribe((upd: any) => {


                    }
                    )
                  }
                  else if(lrRes.message == "LR Number & LSP ID Not found"){
                    this.boschGlobalResponce = true;
                    this.lrNotFoundGlobal.push(element.lrNumber);
                   
                  }
                  else{
                    this.boschGlobalResponce = false;
                  }


                },
                  (err: any) => {
                    this.boschGlobalResponce = false;
                  }
                )

              }
              else if (element.shipmentInTransit && !element.boschDelivered) {
              // if (element.shipmentInTransit && !element.boschInTransit) {
                const lrDetailsBosch = {
                  "lrTrackingDetails": {
                    "lspId": "0097006812",
                    "lrNumber": element.lrNumber,
                    "lrStatus": "Shipment In Transit",
                    "latitude": globEle.latitude,
                    "longitude": globEle.longitude,
                    "location": globEle.address,
                    // "pickUpDate": 2022-10-25,
                    // "lrDate": 2022-10-25,
                    // "actualDeliveredDate": "",
                    // "edd": 2022-10-25,
                    "pickUpDate": element.createdAt.split("T")[0],
                    "lrDate": element.createdAt.split("T")[0],
                    "actualDeliveredDate": "",
                    "edd": element.createdAt.split("T")[0],
                    "receiverName": "Receiver name at the source",
                    "deliveredToPerson": "Reciever name at the final destination",
                    "actualWeight": "10",
                    "numberOfPackages": "10",
                    "length": 100.001,
                    "breadth": 100.001,
                    "height": 100.001,
                    "truckType": "LTL",
                    "truckTonnage": "16 T",
                    "deliveryNotes": "Delivery Notes",
                    "vehicleNo": globEle.vehicleNo
                  }
                }

                this.Api.lrTrackingBosch(lrDetailsBosch).subscribe((lrRes: any) => {
                
                  if (lrRes.message == "Successfully inserted tracking Details" || lrRes.message == "Shipment is already Delivered!") {
                    this.boschGlobalResponce = true;
                    const upData =
                    {
                      "type": "TRANSIT",
                      "lrNumber": element.lrNumber
                    }

                    this.Api.updateBoshSubmittions(upData).subscribe((upd: any) => {


                    }
                    )
                  }
                  else if(lrRes.message == "LR Number & LSP ID Not found"){
                    this.boschGlobalResponce = true;
                    this.lrNotFoundGlobal.push(element.lrNumber);
                   
                  }
                  else{
                    this.boschGlobalResponce = false;
                  }


                },
                  (err: any) => {
                    this.boschGlobalResponce = false;
                  }
                )

              


              }
              
              else if (element.boschInTransit  && element.boschDelivered && !element.ePoDUploaded) {
                const epodUpdate = {
                  "lrNumber": element.lrNumber,
                  "lspId": "0097006812",
                  "epod": element.deliveredBase64
                }
                

                this.Api.updateEpod(epodUpdate).subscribe((lrRes: any) => {
                
                  if (lrRes.message == "File Successfully uploaded") {
                    this.boschGlobalResponce = true;
                    const upData =
                    {
                      "type": "EPOD",
                      "lrNumber": element.lrNumber
                    }

                    this.Api.updateBoshSubmittions(upData).subscribe((upd: any) => {
                  
                      // message: "Successfully Bosch API Updated"

                    },
                      (err: any) => {
                        
                      }
                    )
                  }
                  else{
                    this.boschGlobalResponce = false;
                  }


                },
                  (err: any) => {

                  }
                )
               

              }
              else {
                this.boschGlobalResponce = false;
              }

              this.timeStamp = new Date();
                    localStorage.setItem('apiCallingTime', this.timeStamp.toString());
            }
          });


        });



      })

    } else {
    const resData = res;

      alert("Go back and come again, something went wrong")
    }


  }, (err) => {
    // this.spinner.hide();  
    this.globalResponce = false;


  })
}



}
