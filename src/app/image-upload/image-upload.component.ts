import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/api-service.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  uploadDetails:FormGroup
  imageBg = true;
  constructor(
    private Api: ApiServiceService,
    private fb:FormBuilder
  ) {
    this.uploadDetails = this.fb.group({
      image: [null, Validators.compose([Validators.required])],
      LrNo: [null, Validators.compose([Validators.required])],
      DriverName: ['Ramesh'],
      vehicleNo: [null, Validators.compose([Validators.required])],
      Route: [null, Validators.compose([Validators.required])],
      date:new Date()
    })
  }

  ngOnInit(): void {

    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.imageBg = false;
  }, 2000);
  }
  title = 'HMS';

  uploadPart : boolean = true;
  getPart : boolean = false;

  uploadImage:any;
  img:any;
  arr:any=[]

  inputImg(e:any){
    const file = e.target.files[0];
    console.log(file);

 
    const reader = new FileReader();
        reader.onload = e => this.uploadImage = reader.result;

        reader.readAsDataURL(file);
    
  }


  uploadImg(){

    this.arr.push(this.uploadImage);
    console.log(this.img);
    console.log(this.arr);

    const data ={
      image:this.uploadImage
    }

    this.Api.addImages(data).subscribe((res:any) => {
      console.log(res);

      this.lv()
      
    })
    

    this.uploadPart = false;
    this.getPart = true

  }


  getImgsSer:any=[]

  lv(){

    this.Api.getImages().subscribe((res:any) => {
      console.log(res);

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

  submitForm(){
    console.log(this.uploadDetails.value);
    let abc = this.uploadDetails.value

    const data ={
      image:this.uploadImage,
      LrNo: abc.LrNo,
      DriverName: 'Ramesh',
      vehicleNo: abc.vehicleNo,
      Route: abc.Route,
      date:new Date()
    }
    console.log(data);

    this.Api.postImageDetails(data).subscribe((res:any) => {
      console.log(res);

      if(res.message == "Successfully Driver Added"){
        this.uploadDetails.reset();
        this.uploadImage =''
        alert("Added Successfully")
      }
      
    })

   

   
    

    
  }

}
