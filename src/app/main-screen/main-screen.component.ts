import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  imageBg = false;
  constructor(private router: Router) { }



  ngOnInit(): void {

    // if(sessionStorage.getItem('dataSource')){
      setTimeout(()=>{                          
        this.imageBg = false;
        sessionStorage.setItem('dataSource', JSON.stringify(this.imageBg));
    }, 2000);
    // }
   
    
  
  }

  logout(){
    localStorage.removeItem('logToken');
    this.router.navigate(['/login']);

  }







  

}
