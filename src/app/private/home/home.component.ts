import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(public appservice:AppService){}

  userName = '';
  
  ngOnInit(): void {
     // i am using appService direct in to the HTML
    //this.userName = this.appservice.logedUser.name;

  }
    
   
}
