import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { simulatorsData } from '../../database';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-simulators',
  templateUrl: './simulators.component.html',
  styleUrls: ['./simulators.component.scss']
})
export class SimulatorsComponent implements OnInit {
    
    jsonSimulators: any [] = [];

    constructor(private httpClient: HttpClient,
      private appService: AppService
      ) {}

    ngOnInit(): void {

      this.appService.onNewSimulator.subscribe({
        next:(val)=> {
          console.log(val);
          this.getFromJSON();
        }
      })

      this.getFromJSON();

    }

  getFromJSON(){

    this.httpClient.get('http://localhost:3000/simulatorsAdded')
    .subscribe({
      next: (sample: any) =>{
        console.log('is working',sample);
        this.jsonSimulators = sample;
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
