import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { ApiServiceService } from 'src/api-service.service';

@Component({
  selector: 'app-vehical',
  templateUrl: './vehical.component.html',
  styleUrls: ['./vehical.component.css']
})
export class VehicalComponent implements OnInit, OnDestroy {

  allData :Subscription;
  vehicleNumber:any='';
  data:any={};
  allVehicles :any[]=[]

  constructor(private spinner: NgxSpinnerService, private api:ApiServiceService,) { }



  ngOnInit(): void {
    this.getAllVehicles();
  }
  
  ngOnDestroy(): void {
    this.allData.unsubscribe();
  }

  getAllVehicles(){
    this.spinner.show();

    this.allData = this.api.getVehicles().subscribe((res:any)=>{
      const resData = res
      this.allVehicles = res.data;
      this.spinner.hide();   

      
    },(err)=>{
      // console.log(err);
      // alert(err.error.message)
      // if(err.error.message == ""){

      // }
    this.spinner.hide();   

    })

  }

  
  addVehicle(){
    this.spinner.show();

    this.data = {
      vehicleNumber : this.vehicleNumber.toUpperCase()
    }


    this.api.addVehicle(this.data).subscribe((res:any)=>{
      const resData =res;
      if(resData.message == "successfully vehicle Created"){
        alert("Successfully Vehicle Number Created");
        this.vehicleNumber = ""
      }
      else{
        alert("Data not fetched, Please go back and come again!");

      }

    this.getAllVehicles();

      this.spinner.hide();   

      
    },(err)=>{
      console.log(err);
   this.spinner.hide();   
      
    })


  }

  deletevehicles(id:any){
    this.spinner.show();


    this.api.deleteVehicle(id).subscribe((res:any)=>{
      const resData = res;

      // if(resData.message == "successfully vehicle Deleted"){
        // alert("successfully Route Created");
      // }
      // else{
      //   alert("Data not fetched, Please go back and come again!");

      // }
      if(res){
        alert("Successfully Vehicle Number Deleted");
      }else{
        alert("Data not fetched, Please go back and come again!");

      }

   this.getAllVehicles();

   this.spinner.hide();   


      
    },(err)=>{
      // console.log(err);
      // alert(err.error.message)
      // if(err.error.message == ""){

      // }
      this.spinner.hide();   
    })
    

  }

}
