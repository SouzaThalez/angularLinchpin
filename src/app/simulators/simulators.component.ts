import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { simulatorsData } from '../database';

@Component({
  selector: 'app-simulators',
  templateUrl: './simulators.component.html',
  styleUrls: ['./simulators.component.scss']
})
export class SimulatorsComponent implements OnInit {
    
    data: any [] = [];

    constructor(private httpClient: HttpClient) {}


  ngOnInit(): void {

    this.httpClient.get('http://localhost:3000/simulators')
      .subscribe({
        next: (sample: any) =>{
          console.log('is working',sample);
          this.data = sample;
        },
        error: (erro)=>{
          console.log('nothing here! ', erro);
        }

      })
  }

    //remove data 
    /*
    removeData(id: any){
      
        console.log('sesws'+id);
        this.httpClient.delete("http://localhost:3000/simulators/" + id)
        .subscribe({
          next: (sample: any) =>{
            console.log('deleted id; ',id);
            this.ngOnInit();
          },
          error: (erro)=>{
            console.log('failed to delete! ', id);
          }

        })
    }
    */

}
