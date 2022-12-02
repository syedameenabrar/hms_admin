import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/api-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-assign-routes',
  templateUrl: './assign-routes.component.html',
  styleUrls: ['./assign-routes.component.css']
})
export class AssignRoutesComponent implements OnInit {

  fromAddress:any='';
  toAddress:any='';
  data:any={};
  allRoutes :any[]=[];

  constructor(private spinner: NgxSpinnerService, private api:ApiServiceService,) { }


  ngOnInit(): void {
   this.getAllRoutes();

  }

  getAllRoutes(){
    this.spinner.show();

    this.api.getRoutes().subscribe((res:any)=>{
      const resData = res
      this.allRoutes = res.data;
      if(resData.message == "successfully fetched all routs"){
        // alert("successfully Route Created");
   this.spinner.hide();   

      }
      else{
   this.spinner.hide();   

        alert("Data not fetched, Please go back and come again!");

      }

      
    },(err)=>{
   this.spinner.hide();   

      // alert(err.error.message)
      // if(err.error.message == ""){

      // }
    })
  }

  addRoute(){
    this.spinner.show();
    this.data = {
      address: this.fromAddress+"_to_"+this.toAddress
    }


    this.api.addRoutes(this.data).subscribe((res:any)=>{
      const resData = res
      if(resData.message == "successfully route Created"){
      this.spinner.hide();  

        alert("successfully Route Created");

      }
      else{
      this.spinner.hide();  

        alert("Someting went wrong, try again!");

      }
   this.getAllRoutes();


      
    },(err)=>{
      this.spinner.hide();  



      // alert(err.error.message)
      // if(err.error.message == ""){

      // }
    })
   this.getAllRoutes();


  }

  deleteRoutes(id:any){
    this.spinner.show();


    this.api.deleteRoutes(id).subscribe((res:any)=>{
      const resData = res;
      if(resData.message == "successfully route Deleted"){
      this.spinner.hide();  

        alert("successfully Route Deleted");
      }
      else{
      this.spinner.hide();  

        alert("Someting went wrong, try again!");

      }
   
   this.getAllRoutes();




      
    },(err)=>{
      this.spinner.hide();  


      // alert(err.error.message)
      // if(err.error.message == ""){

      // }
    })

   this.getAllRoutes();


  }

}
