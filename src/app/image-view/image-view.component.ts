import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/api-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { TrackingVehicleDataService } from '../service/tracking-vehicle-data.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
 
  getImgsSer:any=[];
  grid = false;
  list = true;
  title = 'HMS';
  uploadPart : boolean = true;
  getPart : boolean = false;

  uploadImage:any;
  img:any;
  arr:any=[]

  term:any;
  constructor(
    private Api: ApiServiceService,private spinner: NgxSpinnerService, private apiService : TrackingVehicleDataService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
      this.Api.getLrData().subscribe((res:any) => {
        this.getImgsSer = res.data;
      this.spinner.hide();
      }) 
  }

  deleteLr(id:any){
    this.Api.deletetLrData(id).subscribe((res:any) => {
      // window.location.reload();  
    })
  }

  changeToList(){
    this.grid=false;
    this.list=true;
  }

  changeToGrid(){
    this.grid=true;
    this.list=false;
  }


  inputImg(e:any){
    const file = e.target.files[0];
    const reader = new FileReader();
        reader.onload = e => this.uploadImage = reader.result;
        reader.readAsDataURL(file);
  }


  uploadImg(){
    this.arr.push(this.uploadImage);
    const data ={
      image:this.uploadImage
    }
    this.Api.addImages(data).subscribe((res:any) => {
      this.lv()
    })
    this.uploadPart = false;
    this.getPart = true
  }


  

  lv(){

    this.Api.getImages().subscribe((res:any) => {
      this.getImgsSer = res.data;
    })
    this.uploadPart = false;
    this.getPart = true
  }


  back(){
    this.uploadPart = true;
    this.getPart = false;
    this.uploadImage =''
  }
}
