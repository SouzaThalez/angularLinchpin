import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { simulatorsAdded, simulatorsData } from '../database';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent{
 
 constructor(private httpClient: HttpClient){}
//Coming from ngModel
 simulatorName: any ; 


  getModalInfo(simulatorCode: string){

      //Creating new instance of class
      let data = new simulatorsAdded();

     data.simulatorName = this.simulatorName;
     data.simulatorCode = simulatorCode;

      this.httpClient.post('http://localhost:3000/simulatorsAdded',data)
      .subscribe({
        next:(sample: any)=>{
          console.log('post working', sample);
        },
        error:(error: any)=>{
            console.log('post not working',error);
        }
      });


  }


  



}
