import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Observer } from 'rxjs';
import { ApiServiceService } from 'src/api-service.service';

@Component({
  selector: 'app-track-vehicles',
  templateUrl: './track-vehicles.component.html',
  styleUrls: ['./track-vehicles.component.css']
})
export class TrackVehiclesComponent implements OnInit {
  count: string = '';
  globalCount: string = '';
  tCount: string = '';
  dataTrack: any;
  globalTrack: any;
  trackData: any;
  getImgsSer: any = [];
  image:any;
  base64Image: any;


  // vehiclesList:boolean = true;
  // mapList:boolean = false;

  constructor(private api: ApiServiceService, private spinner: NgxSpinnerService) { }



  ngOnInit(): void {
    this.getLrData();
    this.locoNav();
    this.globalApi();


  }

  getLrData() {
    this.api.getLrData().subscribe((res: any) => {
      this.getImgsSer = res.data;
      this.getImgsSer.forEach((element: any) => {
        if (element.shipmentInTransit && !element.shipmentDelivered) {
        }
        else if (element.shipmentInTransit && element.shipmentDelivered) {
        }
        else {
        }
      });
    })
  }

  locoNav() {
    this.spinner.show();

    this.api.trackVehicle().subscribe((res: any) => {
      const resData = res.data;
      this.count = res.count;
      this.tCount = this.globalCount + this.count
      this.dataTrack = res.data;
      this.spinner.hide();


      // if (res) {
      //   this.api.getLrData().subscribe((res: any) => {
      //     const lrDataApi = res.data;
      //     lrDataApi.forEach((element: any) => {
      //       this.dataTrack.forEach((resEle: any) => {
      //         if (resEle.data.vehicle_number == element.vehicleNumber.vehicleNumber) {
      //           if (element.shipmentInTransit && !element.shipmentDelivered) {
      //             const lrDetailsBosch = {
      //               "lrTrackingDetails": {
      //                 "lspId": "0097006812",
      //                 "lrNumber": element.lrNumber,
      //                 "lrStatus": "Shipment In Transit",
      //                 "latitude": resEle.data.cordinate[0],
      //                 "longitude": resEle.data.cordinate[1],
      //                 "location": resEle.data.address,
      //                 "pickUpDate": element.createdAt.split("T")[0],
      //                 "lrDate": element.createdAt.split("T")[0],
      //                 "actualDeliveredDate": "",
      //                 "edd": element.createdAt.split("T")[0],
      //                 "receiverName": "Receiver name at the source",
      //                 "deliveredToPerson": "Reciever name at the final destination",
      //                 "actualWeight": "10",
      //                 "numberOfPackages": "10",
      //                 "length": 100.001,
      //                 "breadth": 100.001,
      //                 "height": 100.001,
      //                 "truckType": "LTL",
      //                 "truckTonnage": "16 T",
      //                 "deliveryNotes": "Delivery Notes",
      //                 "vehicleNo": resEle.data.vehicle_number
      //               }
      //             }

      //             console.log('lrDetailsBoschTr', lrDetailsBosch);

      //             this.api.lrTrackingBosch(lrDetailsBosch).subscribe((lrRes: any) => {
      //               if (lrRes.message == "Successfully inserted tracking Details") {
      //                 const upData =
      //                 {
      //                   "type": "TRANSIT",
      //                   "lrNumber": element.lrNumber
      //                 }

      //                 this.api.updateBoshSubmittions(upData).subscribe((upd: any) => {
      //                   console.log('====================================');
      //                   console.log(upd);
      //                   console.log('====================================');

      //                 }
      //                 )
      //               }

      //             })

      //           }
      //           else if (element.shipmentInTransit && element.shipmentDelivered && element.boschInTransit  && !element.boschDelivered) {
      //             const lrDetailsBosch = {
      //               "lrTrackingDetails": {
      //                 "lspId": "0097006812",
      //                 "lrNumber": element.lrNumber,
      //                 "lrStatus": "Shipment Delivered",
      //                 "latitude": resEle.data.cordinate[0],
      //                 "longitude": resEle.data.cordinate[1],
      //                 "location": resEle.data.address,
      //                 "pickUpDate": element.createdAt.split("T")[0],
      //                 "lrDate": element.createdAt.split("T")[0],
      //                 "actualDeliveredDate": element.createdAt.split("T")[0],
      //                 "edd": element.createdAt.split("T")[0],
      //                 "receiverName": "Receiver name at the source",
      //                 "deliveredToPerson": "Reciever name at the final destination",
      //                 "actualWeight": "10",
      //                 "numberOfPackages": "10",
      //                 "length": 100.001,
      //                 "breadth": 100.001,
      //                 "height": 100.001,
      //                 "truckType": "LTL",
      //                 "truckTonnage": "16 T",
      //                 "deliveryNotes": "Delivery Notes",
      //                 "vehicleNo": resEle.data.vehicle_number
      //               }
      //             }

      //             console.log('lrDetailsBoschDe', lrDetailsBosch)
      //             this.api.lrTrackingBosch(lrDetailsBosch).subscribe((lrRes: any) => {
      //               console.log('lrRes', lrRes);
      //               if (lrRes.message == "Successfully inserted tracking Details") {
      //                 const upData =
      //                 {
      //                   "type": "DELIVERED",
      //                   "lrNumber": element.lrNumber
      //                 }

      //                 this.api.updateBoshSubmittions(upData).subscribe((upd: any) => {
      //                   console.log('====================================');
      //                   console.log(upd);
      //                   console.log('====================================');
      //                   message: "Successfully Bosch API Updated"

      //                 },
      //                   (err: any) => {

      //                   }
      //                 )
      //               }


      //             },
      //               (err: any) => {

      //               }
      //             )

      //           }
      //           else if (element.boschInTransit  && element.boschDelivered && !element.ePoDUploaded) {
      //             const epodUpdate = {
      //               "lrNumber": element.lrNumber,
      //               "lspId": "0097006812",
      //               "epod": element.deliveredBase64
      //             }
                  

      //             console.log('epodUpdate', epodUpdate)
      //             this.api.updateEpod(epodUpdate).subscribe((lrRes: any) => {
      //               console.log('lrRes', lrRes);
      //               if (lrRes.message == "File Successfully uploaded") {
      //                 const upData =
      //                 {
      //                   "type": "EPOD",
      //                   "lrNumber": element.lrNumber
      //                 }

      //                 this.api.updateBoshSubmittions(upData).subscribe((upd: any) => {
      //                   console.log('====================================');
      //                   console.log(upd);
      //                   console.log('====================================');
      //                   // message: "Successfully Bosch API Updated"

      //                 },
      //                   (err: any) => {

      //                   }
      //                 )
      //               }


      //             },
      //               (err: any) => {

      //               }
      //             )
                 

      //           }
      //           else {

      //           }
      //         }
      //       });


      //     });



      //   }
      //     ,
      //     (err: any) => {

      //     }
      //   )



      // } else {
      //   alert("Go back and come again, something went wrong");
      // }


    }, (err) => {
      this.spinner.hide();


    })
  }

  globalApi() {
    this.spinner.show();

    this.api.otherVehiclesTracking().subscribe((res: any) => {

      const resData = res;
      this.globalCount = resData.length
      this.count = res.count;
      this.globalTrack = res;
      this.spinner.hide();  

      // if (res) {

      //   this.api.getLrData().subscribe((res: any) => {

      //     const lrDataApi = res.data;

      //     lrDataApi.forEach((element: any) => {

      //       this.globalTrack.forEach((globEle: any) => {
      //         if (globEle.vehicleNo == element.vehicleNumber.vehicleNumber) {
      //           if (element.shipmentInTransit && !element.shipmentDelivered) {
      //             const lrDetailsBosch = {
      //               "lrTrackingDetails": {
      //                 "lspId": "0097006812",
      //                 "lrNumber": element.lrNumber,
      //                 "lrStatus": "Shipment In Transit",
      //                 "latitude": globEle.latitude,
      //                 "longitude": globEle.longitude,
      //                 "location": globEle.address,
      //                 // "pickUpDate": 2022-10-25,
      //                 // "lrDate": 2022-10-25,
      //                 // "actualDeliveredDate": "",
      //                 // "edd": 2022-10-25,
      //                 "pickUpDate": element.createdAt.split("T")[0],
      //                 "lrDate": element.createdAt.split("T")[0],
      //                 "actualDeliveredDate": "",
      //                 "edd": element.createdAt.split("T")[0],
      //                 "receiverName": "Receiver name at the source",
      //                 "deliveredToPerson": "Reciever name at the final destination",
      //                 "actualWeight": "10",
      //                 "numberOfPackages": "10",
      //                 "length": 100.001,
      //                 "breadth": 100.001,
      //                 "height": 100.001,
      //                 "truckType": "LTL",
      //                 "truckTonnage": "16 T",
      //                 "deliveryNotes": "Delivery Notes",
      //                 "vehicleNo": globEle.vehicleNo
      //               }
      //             }

      //             this.api.lrTrackingBosch(lrDetailsBosch).subscribe((lrRes: any) => {
      //               console.log('lrRes', lrRes);
      //               if (lrRes.message == "Successfully inserted tracking Details") {
      //                 const upData =
      //                 {
      //                   "type": "TRANSIT",
      //                   "lrNumber": element.lrNumber
      //                 }

      //                 this.api.updateBoshSubmittions(upData).subscribe((upd: any) => {
      //                   console.log('====================================');
      //                   console.log(upd);
      //                   console.log('====================================');

      //                 }
      //                 )
      //               }


      //             },
      //               (err: any) => {

      //               }
      //             )

      //             console.log('lrDetailsBoschTr', lrDetailsBosch);


      //           }
      //           else if (element.shipmentInTransit && element.shipmentDelivered && element.boschInTransit  && !element.boschDelivered) {

      //             const lrDetailsBosch = {
      //               "lrTrackingDetails": {
      //                 "lspId": "0097006812",
      //                 "lrNumber": element.lrNumber,
      //                 "lrStatus": "Shipment Delivered",
      //                 "latitude": globEle.latitude,
      //                 "longitude": globEle.longitude,
      //                 "location": globEle.address,
      //                 "pickUpDate": element.createdAt.split("T")[0],
      //                 "lrDate": element.createdAt.split("T")[0],
      //                 "actualDeliveredDate": element.createdAt.split("T")[0],
      //                 "edd": element.createdAt.split("T")[0],
      //                 "receiverName": "Receiver name at the source",
      //                 "deliveredToPerson": "Reciever name at the final destination",
      //                 "actualWeight": "10",
      //                 "numberOfPackages": "10",
      //                 "length": 100.001,
      //                 "breadth": 100.001,
      //                 "height": 100.001,
      //                 "truckType": "LTL",
      //                 "truckTonnage": "16 T",
      //                 "deliveryNotes": "Delivery Notes",
      //                 "vehicleNo": globEle.vehicleNo
      //               }
      //             }

      //             console.log('lrDetailsBoschTr', lrDetailsBosch);
      //             this.api.lrTrackingBosch(lrDetailsBosch).subscribe((lrRes: any) => {
      //               console.log('lrRes', lrRes);
      //               if (lrRes.message == "Successfully inserted tracking Details") {
      //                 const upData =
      //                 {
      //                   "type": "DELIVERED",
      //                   "lrNumber": element.lrNumber
      //                 }

      //                 this.api.updateBoshSubmittions(upData).subscribe((upd: any) => {
      //                   console.log('====================================');
      //                   console.log(upd);
      //                   console.log('====================================');

      //                 }
      //                 )
      //               }


      //             },
      //               (err: any) => {

      //               }
      //             )

      //           }
      //           else if (element.boschInTransit  && element.boschDelivered && !element.ePoDUploaded) {
      //             const epodUpdate = {
      //               "lrNumber": element.lrNumber,
      //               "lspId": "0097006812",
      //               "epod": element.deliveredBase64
      //             }
                  

      //             console.log('epodUpdate', epodUpdate)
      //             this.api.updateEpod(epodUpdate).subscribe((lrRes: any) => {
      //               console.log('lrRes', lrRes);
      //               if (lrRes.message == "File Successfully uploaded") {
      //                 const upData =
      //                 {
      //                   "type": "EPOD",
      //                   "lrNumber": element.lrNumber
      //                 }

      //                 this.api.updateBoshSubmittions(upData).subscribe((upd: any) => {
      //                   console.log('====================================');
      //                   console.log(upd);
      //                   console.log('====================================');
      //                   // message: "Successfully Bosch API Updated"

      //                 },
      //                   (err: any) => {

      //                   }
      //                 )
      //               }


      //             },
      //               (err: any) => {

      //               }
      //             )
                 

      //           }
      //           else {

      //           }
      //         }
      //       });


      //     });



      //   })

      // } else {
      //   alert("Go back and come again, something went wrong")
      // }


    }, (err) => {
      // this.spinner.hide();  


    })
  }

  showMap(data: any) {
    window.open(data);
  }

  longitude(lat: any, lng: any) {
    window.open(`https://maps.google.com/?q=${lat},${lng}`);
  }

  refreshApi() {
    this.locoNav();
    this.globalApi();
  }





}
