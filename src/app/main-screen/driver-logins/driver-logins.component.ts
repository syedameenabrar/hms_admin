import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/api-service.service';
import { NgxSpinnerService } from "ngx-spinner";  


@Component({
  selector: 'app-driver-logins',
  templateUrl: './driver-logins.component.html',
  styleUrls: ['./driver-logins.component.css']
})
export class DriverLoginsComponent implements OnInit {

  tokenLog:any='';
  firstName:any='';
  lastName:any='';
  username:any='';
  password:any='';
  email:any='';
  phoneNumber:any='';
  data:any={};
  allLogins :any[]=[];


  constructor(private api:ApiServiceService,private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
   this.getAllLogins();
  }

  getAllLogins(){
    this.spinner.show();

    this.api.getLoginDetails().subscribe((res:any)=>{
      const resData = res;
      this.allLogins = res.data;
      if(resData.message == "All users fetched successfully"){
  

      }
      else{
   

        alert("Data not fetched, Please go back and come again!");

      }
  this.spinner.hide(); 
    },(err)=>{
      alert(err.error.message);
    })
  }

  createDriver(){
    this.spinner.show();
    this.data = {
      firstName : this.firstName,
      lastName : this.lastName,
      username : this.firstName + "_" + this.lastName,
      password : this.password,
      email : this.email,
      phoneNumber : this.phoneNumber,
    }

    this.api.driverRegister(this.data).subscribe((res:any)=>{

      const resData = res
      
      if(resData.message = "successfully user Created"){
        alert("Driver login created successfully")
        this.firstName = "";
      this.lastName = "";
      this.password = "";
      this.email = "";
      this.phoneNumber = "";
      
      }else{
        alert("Not created, try again");

      }

      this.spinner.hide(); 
      
    },(err)=>{

      // alert(err.error.message)
      
        alert("Not created, try again");
    
    })
    this.spinner.hide(); 

  }


  deleteLogins(id:any){
    this.spinner.show();


    this.api.deleteLogins(id).subscribe((res:any)=>{
      const resData = res;
      if(resData.message == "successfully user Deleted"){

        alert("successfully user Deleted");
      }
      else{

        alert("Someting went wrong, try again!");
      }
      this.getAllLogins();
      this.spinner.hide();    
    },(err)=>{
      this.spinner.hide();  

      alert("Someting went wrong, try again!");
    })
    this.getAllLogins();
  }

}
