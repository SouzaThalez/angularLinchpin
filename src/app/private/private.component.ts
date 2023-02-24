import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {


  constructor(private appservice: AppService,
              public httpClient: HttpClient
              ){}

  ngOnInit(): void {
    //send userloged ID to local storage
    //let userLogedID = this.appservice.logedUser.id;
    //let userLogedStringID = JSON.stringify(userLogedID);
    //localStorage.setItem('userID',userLogedStringID);
   console.log('geting user from local: ',localStorage.getItem('userID'));
    let id = localStorage.getItem('userID') as any;

   this.httpClient.get('http://localhost:3000/users/'+id).subscribe({
      next:(sample: any)=>{
        console.log('goodresquest: ',sample);
        this.appservice.logedUser = sample;
      },
      error:(error)=>{console.log('not good request',error)}
   })
 
    

  }

}
