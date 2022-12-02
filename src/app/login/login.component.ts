import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/api-service.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string='';
  pass:string='';
  data:any={}


  constructor(private api:ApiServiceService, private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.data = {
      email:this.email,
      password:this.pass,
    }
    this.spinner.show();
    this.api.loginDetails(this.data).subscribe((res:any)=>{
      const resData = res
      if(res.message == "Successfully User login" && resData.data.user.accountType == "admin"){
      localStorage.setItem("logToken",resData.data.user.token)
        this.router.navigate(['/main']);
      }
      else if(resData.data.user.accountType == "Driver"){
        alert("Try with Admin credentials");
      }
      else{
        alert("Something went wrong");
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
      }
      this.spinner.hide();  
    })
  }
}
